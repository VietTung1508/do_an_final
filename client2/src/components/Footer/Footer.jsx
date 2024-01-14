import React from "react";
import "./Footer.scss";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const shopping = [
  {
    title: "Giao hàng",
    link: "/",
  },
  {
    title: "Thanh toán",
    link: "/",
  },
  {
    title: "Trả hàng",
    link: "/",
  },
];
const about = [
  {
    title: "Báo chí",
    link: "/",
  },
  {
    title: "Quan hệ với nhà đầu tư",
    link: "/",
  },
  {
    title: "Giới thiệu về H&M Group",
    link: "/",
  },
];

const catalog = [
  {
    title: "Sale",
    link: "/products/sale",
  },
  {
    title: "Nam",
    link: "/products/sale",
  },
  {
    title: "Nữ",
    link: "/products/sale",
  },
  {
    title: "Unisex",
    link: "/products/sale",
  },
  {
    title: "Trẻ Em",
    link: "/products/sale",
  },
];

const signIn = [
  {
    title: "Dịch vụ Khách hàng",
    link: "/",
  },
  {
    title: "Các điều khoản & điều kiện",
    link: "/",
  },
  {
    title: "Pháp lý & Bảo mật",
    link: "/",
  },
  {
    title: "Liên hệ",
    link: "/",
  },
  {
    title: "Thông báo cookie",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="provisions">
        <div className="shopping">
          <h2>MUA SẮM</h2>
          {shopping.map((s) => (
            <span>{s.title}</span>
          ))}
        </div>
        <div className="aboutUs">
          <h2>THÔNG TIN DOANH NGHIỆP</h2>
          {about.map((a) => (
            <span>{a.title}</span>
          ))}
        </div>
        <div className="catalog">
          <h2>Danh Mục</h2>
          {catalog.map((c) => (
            <span>{c.title}</span>
          ))}
        </div>
        <div className="signIn">
          <h2>TRỢ GIÚP</h2>
          {signIn.map((s) => (
            <span>{s.title}</span>
          ))}
        </div>
      </div>
      <div className="socials">
        <div className="socials_icons">
          <FaFacebookSquare className="icon" />
          <FaInstagramSquare className="icon" />
          <FaTiktok className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
        </div>
        <p>
          Nội dung trên trang này được bảo vệ bản quyền và là tài sản của H & M
          Hennes & Mauritz AB.
        </p>
        <img src="./images/logo.png" alt="" className="brand_logo" />
        <h3>Việt Nam | đ</h3>
        <div className="bg-Black">
          <p className="text-white text-center items-center py-3">
            © 2024 Đồ Án K14 ATT0203, Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
