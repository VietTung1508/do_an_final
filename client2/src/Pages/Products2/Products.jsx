import React, { useEffect, useState } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card.jsx";
import axiosClient from "../../api/axiosClient.js";
import clsx from "clsx";
// import ProductSideBar from "../../components/ProductSideBar/ProductSideBar.jsx";
import {Link, useParams, useSearchParams} from "react-router-dom";
import useStateTag from "../../ReuseHook/useStateTag.jsx";
import useStateProducts from "../../ReuseHook/useStateProducts.jsx";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";

const Products = ({ type }) => {


    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams("All");
    const category = searchParams.get("category");
    const [allProductsLength, setAllProductsLength] = useState(0);
    const pages = Math.ceil(allProductsLength / 16);
    const currentPage = searchParams.get("page");
    const getNewestProduct = searchParams.get("newest");
    const priceSale = searchParams.get("priceSale");

    useEffect(() => {
        try {
            const getProducts = async () => {
                if (getNewestProduct) {
                    const res = await axiosClient.get(`product/products/newest`);
                    setProducts(res.data);
                } else {
                    const res = await axiosClient.get(
                        !category
                            ? `product/products?page=${currentPage}`
                            : `product/products/${category}?page=${currentPage}`
                    );
                    setProducts(res.data);
                }
            };
            getProducts();
        } catch (e) {
            console.log(e);
        }
    }, [category, currentPage, getNewestProduct]);

    useEffect(() => {
        try {
            const getAllProducts = async () => {
                const res = await axiosClient.get(
                    !category ? `product/allProducts` : `product/allProducts/${category}`
                );
                setAllProductsLength(res.data.length);
            };
            getAllProducts();
        } catch (e) {
            console.log(e);
        }
    }, [category, currentPage, getNewestProduct]);

    const { tag } = useParams();

    const [product, setProduct] = useState([]);
    const [category2, setCategory] = useState([]);
    const [objectsToShow, setToShow] = useState([])

    useStateTag(tag, setCategory)
    useStateProducts(setProduct, category2 , setToShow)

    // const [visible, setVisible] = useState(4);
    // const showMoreItems = () => {
    //     setVisible((prevValue) => prevValue +4)
    // }

    const [categoryFilters, setCategoryFilters] = useState(new Set());

    let tagVn =""
    if(tag ==="men")
        tagVn = "Nam"
    else if(tag === "women")
        tagVn = "Nữ"
    else if (tag === "unisex")
        tagVn = "unisex"
    else if (tag === "kid")
        tagVn = "trẻ em"

    function updateFilters(checked, categoryFilter) {
        if (checked)
            setCategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
            setCategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
            });
    }

    const filteredProducts =
        categoryFilters.size === 0
            ? objectsToShow
            : objectsToShow.filter((p) => categoryFilters.has(p.category));

    const compare = (a, b, ascendingOrder) => {
        if (a < b) {
            return ascendingOrder ? -1 : 1;
        }
        if (a > b) {
            return ascendingOrder ? 1 : -1;
        }
        return 0;
    }
    const handleChange = (value) => {
        if(value === 'none' || value === null){
            setToShow([...product])
        } else {
            let toType, toAscending
            switch(value){
                case 'ascending' : toType = true; toAscending = true; break;
                case 'descending' : toType = true; toAscending = false; break;
                case 'high' : toType = false; toAscending = true; break;
                case 'low' : toType = false; toAscending = false; break;
                default:
                    toType = true;
                    toAscending = true;
            }
            let current = [...product]
            current.sort((a, b) => toType ?
                compare(a.title, b.title, toAscending)
                :
                compare(a.price, b.price, toAscending))
            setToShow([...current])
        }
    }

    return (
        <div className="product mt-[3rem]">
            <div className="product-container">
                <div className="filterItem">
                    <div className="section">
                        <h3 className="section_title">Sản phẩm mới về</h3>
                        <Link to={`/products`}>
                            <p>Xem Tất Cả</p>
                        </Link>
                        <Link to={`/products?newest=true`}>
                            <p>Hàng Mới Về</p>
                        </Link>
                    </div>
                    <div className="section">
                        <h3 className="section_title">Ưu đãi</h3>
                        <Link to={`/products?priceSale=under500`}>
                            <p>Sale dưới 500K</p>
                        </Link>
                        <Link to={`/products?priceSale=under250`}>
                            <p>Sale dưới 250K</p>
                        </Link>
                    </div>
                    <h3 className="section_title"><b>{tagVn}</b></h3>
                    {
                        category2?.map((cat) => (
                            <div className="inputItem mt-3" key={cat._id}>
                                <input type="checkbox"
                                       onChange={(e) => updateFilters(e.target.checked, cat.title)}
                                       id={cat._id} value={cat._id} className={'text-green-500 mr-3'}/>
                                <label htmlFor={cat._id} className={'select-none'}>{cat.title}</label>

                            </div>
                        ))
                    }
                </div>
                <div className="right">
                    <div className={'grid grid-cols-5'}>
                        <h1 className="title col-span-4">
                            {getNewestProduct
                                ? "HÀNG MỚI VỀ"
                                : category
                                    ? category.toUpperCase()
                                    :
                                    tagVn}
                        </h1>
                        <div className={'mb-3 col-span-1 mr-0'}>
                            <FormControl sx={{m: 1, minWidth: 120}}>
                                <InputLabel htmlFor="grouped-select">Sắp xếp...</InputLabel>
                                <Select defaultValue="" id="grouped-select" label="Grouping"
                                        onChange={(e) => handleChange(e.target.value)}>
                                    <MenuItem value="">
                                        <em>Mặc định</em>
                                    </MenuItem>
                                    <ListSubheader>Theo tên</ListSubheader>
                                    <MenuItem value="ascending">A-Z</MenuItem>
                                    <MenuItem value="descending">Z-A</MenuItem>
                                    <ListSubheader>Theo giá</ListSubheader>
                                    <MenuItem value="high">Giá thấp nhất</MenuItem>
                                    <MenuItem value="low">Giá cao nhất</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                    </div>

                    <div className="cards">
                        {priceSale === "under500"
                            ? filteredProducts && filteredProducts
                            .filter((p) => p.price_sale <= 500000 && p.isSale === true)
                            .map((product) => (
                                <Card key={product._id} product={product}/>
                            ))
                            : priceSale === "under250"
                                ? filteredProducts && filteredProducts
                                .filter((p) => p.price_sale <= 250000 && p.isSale === true)
                                .map((product) => (
                                    <Card key={product._id} product={product}/>
                                ))
                                : filteredProducts && filteredProducts.map((product) => (
                                <Card key={product._id} product={product}/>
                            ))}
                    </div>
                    {!getNewestProduct && (
                        <div className="pagination">
                            {[...Array(pages)].map((page, i) => (
                                <Link
                                    to={
                                        category
                                            ? `/products?category=${category}&page=${i + 1}`
                                            : `/products?page=${i + 1}`
                                    }
                                    key={i}
                                >
                  <span
                      className={clsx(
                          `ml-2 cursor-pointer`,
                          Number(currentPage) === i + 1 &&
                          "text-blue-600 font-semibold"
                      )}
                  >
                    {i + 1}
                  </span>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
