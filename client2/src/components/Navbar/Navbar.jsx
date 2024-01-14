import React from "react";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RiShoppingBag3Line } from "react-icons/ri";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SubNav from "./SubNav.jsx";
import logo from "/images/logo.png";
import Cart from "../Cart/Cart.jsx";
import TogglePage from "../TogglePage/TogglePage.jsx";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="main_nav">
        <Link to={"/"}>
          <img src={logo} alt="brand_logo" className="brand_logo" />
        </Link>
        <div className="main_nav_actions">
          <TogglePage />

          <div className="action">
            <MdOutlineFavoriteBorder
              color={"var(--text_color)"}
              className="icon"
            />
            <h3>Yêu thích</h3>
          </div>
          <Link to={user ? "/account" : "/auth"}>
            <div className="action">
              <LuUser2 color={"var(--text_color)"} className="icon" />
              <h3>{user ? "Tài khoản của tôi" : "Đăng nhập"}</h3>
            </div>
          </Link>
          <div className="action isCart">
            <RiShoppingBag3Line color={"var(--text_color)"} className="icon" />
            <h3>Giỏ hàng ({cart.length})</h3>

            <div className="cart">
              <Cart />
            </div>
          </div>
        </div>
      </div>
      <div className="sub_nav">
        <SubNav />
      </div>
      {/*<BasicBreadcrumbs/>*/}
    </div>
  );
};

export default Navbar;
