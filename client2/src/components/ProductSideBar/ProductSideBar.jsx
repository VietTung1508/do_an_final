import React, { useEffect, useState } from "react";
import "./ProductSideBar.scss";
import axiosClient from "../../api/axiosClient";
import { Link } from "react-router-dom";

const ProductSideBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const res = await axiosClient.get("category/categories");
            setCategories(res.data);
        };

        getCategories();
    }, []);

    console.log();
    return (
        <div className="productSideBar">
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
            <div className="section">
                <h3 className="section_title">Nam</h3>
                {categories
                    .filter((cate) => cate.tag === "men")
                    .map((c) => (
                        <Link key={c._id} to={`/products?category=${c.title}`}>
                            <p>{c.title}</p>
                        </Link>
                    ))}
            </div>
            <div className="section">
                <h3 className="section_title">Nữ</h3>
                {categories
                    .filter((cate) => cate.tag === "women")
                    .map((c) => (
                        <Link key={c._id} to={`/products?category=${c.title}`}>
                            <p>{c.title}</p>
                        </Link>
                    ))}
            </div>
            <div className="section">
                <h3 className="section_title">Unisex</h3>
                {categories
                    .filter((cate) => cate.tag === "unisex")
                    .map((c) => (
                        <Link key={c._id} to={`/products?category=${c.title}`}>
                            <p>{c.title}</p>
                        </Link>
                    ))}
            </div>
            <div className="section">
                <h3 className="section_title">Thể Thao</h3>
                {categories
                    .filter((cate) => cate.tag === "sport")
                    .map((c) => (
                        <Link key={c._id} to={`/products?category=${c.title}`}>
                            <p key={c._id}>{c.title}</p>
                        </Link>
                    ))}
            </div>
            <div className="section">
                <h3 className="section_title">Trẻ Em</h3>
                {categories
                    .filter((cate) => cate.tag === "kid")
                    .map((c) => (
                        <Link key={c._id} to={`/products?category=${c.title}`}>
                            <p key={c._id}>{c.title}</p>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default ProductSideBar;
