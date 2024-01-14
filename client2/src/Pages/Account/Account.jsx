import React, { useEffect } from "react";
import "./Account.scss";
import { FiBox } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { VscSignOut, VscChevronRight } from "react-icons/vsc";
import { GrContact } from "react-icons/gr";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import MyOrder from "./components/MyOrder/MyOrder";
import AccountSetting from "./components/AccountSetting/AccountSetting";
import CustomerCare from "./components/CustomerCare/CustomerCare";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";

const sideBarItems = [
  {
    icon: <FiBox className="icon" />,
    title: "Đơn hàng của tôi",
    link: "/account?page=orders",
  },
  {
    icon: <IoSettingsOutline className="icon" />,
    title: "Cài đặt tài khoản",
    link: "/account?page=settings",
  },
  {
    icon: <GrContact className="icon" />,
    title: "Chăm sóc khách hàng",
    link: "/account?page=customerCare",
  },
  {
    icon: <VscSignOut className="icon" />,
    title: "Đăng xuất",
    link: "/",
  },
];

const Account = () => {
  const user = useSelector((state) => state.user.user);
  const [searchParams, setSearchParams] = useSearchParams("All");
  const page = searchParams.get("page");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="account">
      <div className="left">
        <h1>Hello Thành Viên</h1>
        <div className="account_sidebar">
          {sideBarItems.map((item) => (
            <Link
              key={item.title}
              to={item.link}
              className="account_sidebar_item_wrapper"
            >
              <div
                className="account_sidebar_item"
                onClick={item.link === "/" ? handleLogout : ""}
              >
                <div className="title">
                  <span>{item.icon}</span>
                  <p>{item.title}</p>
                </div>
                <VscChevronRight className="detailIcon" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="right">
        {page === "customerCare" ? (
          <CustomerCare />
        ) : page === "settings" ? (
          <AccountSetting />
        ) : (
          <MyOrder />
        )}
      </div>
    </div>
  );
};

export default Account;
