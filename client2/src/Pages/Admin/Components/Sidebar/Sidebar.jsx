import "./Sidebar.scss";

import { MdDashboard } from "react-icons/md";
import { FaUserFriends, FaUserCircle } from "react-icons/fa";
import { IoShirtSharp, IoReceiptSharp, IoLogOut } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { RiCoupon2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../../redux/adminSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="admin_sidebar">
      <div className="top">
        <Link to="/admin">
          <img className="logo" src="images/logo.png" alt="" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Trang Chính</p>
          <Link to="/admin">
            <li>
              <MdDashboard className="icon" />
              <span>Bảng Thống Kê</span>
            </li>
          </Link>
          <p className="title">Danh Sách</p>
          <Link to="/admin/users">
            <li>
              <FaUserFriends className="icon" />
              <span>Tài Khoản</span>
            </li>
          </Link>
          <Link to="/admin/products">
            <li>
              <IoShirtSharp className="icon" />
              <span>Sản Phẩm</span>
            </li>
          </Link>
          <Link to="/admin/categories">
            <li>
              <BiSolidCategory className="icon" />
              <span>Danh Mục</span>
            </li>
          </Link>
          <Link to="/admin/coupons">
            <li>
              <RiCoupon2Fill className="icon" />
              <span>Mã Giảm Giá</span>
            </li>
          </Link>
          <Link to="/admin/orders">
            <li>
              <IoReceiptSharp className="icon" />
              <span>Đơn Hàng</span>
            </li>
          </Link>
          <p className="title">ADMIN</p>
          <Link to="/admin/profile">
            <li>
              <FaUserCircle className="icon" />
              <span>Thông Tin</span>
            </li>
          </Link>
          <li onClick={handleLogout}>
            <IoLogOut className="icon" />
            <span>Đăng Xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
