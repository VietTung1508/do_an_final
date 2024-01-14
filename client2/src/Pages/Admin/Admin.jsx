import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useMemo } from "react";

function Admin({ children }) {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin.admin);

  console.log(admin);
  useEffect(() => {
    if (!admin) {
      navigate("/admin/auth");
    }
  }, []);

  return (
    <div className="admin_page">
      <Sidebar />
      <div className="admin_page_container">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default Admin;
