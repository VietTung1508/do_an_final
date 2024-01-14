import React, { useEffect, useState } from "react";
import "./Products.scss";
import Card from "../../components/Card/Card.jsx";
import axiosClient from "../../api/axiosClient.js";
import clsx from "clsx";
import ProductSideBar from "../../components/ProductSideBar/ProductSideBar.jsx";
import {Link, useSearchParams} from "react-router-dom";

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

    return (
        <div className="product">
            <div className="product-container">
                <ProductSideBar />
                <div className="right">
                    <h1 className="title">
                        {getNewestProduct
                            ? "HÀNG MỚI VỀ"
                            : category
                                ? category.toUpperCase()
                                : "XEM TẤT CẢ"}
                    </h1>
                    <div className="cards">
                        {priceSale === "under500"
                            ? products
                                .filter((p) => p.price_sale <= 500000 && p.isSale == true)
                                .map((product) => (
                                    <Card key={product._id} product={product} />
                                ))
                            : priceSale === "under250"
                                ? products
                                    .filter((p) => p.price_sale <= 250000 && p.isSale == true)
                                    .map((product) => (
                                        <Card key={product._id} product={product} />
                                    ))
                                : products.map((product) => (
                                    <Card key={product._id} product={product} />
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
