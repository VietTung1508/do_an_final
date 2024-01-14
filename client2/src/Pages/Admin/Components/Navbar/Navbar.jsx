import "./Navbar.scss";

import { BsSearch } from "react-icons/bs";
import { FaRegMoon, FaRegBell } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const admin = useSelector((state) => state.admin.admin);

  return (
    <div className="admin_navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Tìm Kiếm..." />
          <span className="icon">
            <BsSearch />
          </span>
        </div>
        <div className="items">
          <div className="item">
            <FaRegBell className="icon" />
            <div className="counter">2</div>
          </div>

          <Link to="/admin/profile">
            <div className="item">
              <img
                src={admin ? admin.admin.image : ""}
                alt=""
                className="avatar"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
