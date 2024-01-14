import "./AdminAuth.scss";
import { RiAdminFill } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import axiosClient from "../../../../api/axiosClient";
import { useDispatch } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../../../redux/adminSlice";
import { useNavigate } from "react-router-dom";

function AdminAuth() {
  const [see, setSee] = useState(false);
  const [err, setErr] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogInAdmin = async (e) => {
    e.preventDefault();
    setErr(false);
    dispatch(loginStart());
    try {
      const res = await axiosClient.post("auth/adminLogin", credentials);
      dispatch(loginSuccess({ admin: res.data, token: res.data.accessToken }));
      navigate("/admin");
    } catch (e) {
      dispatch(loginFailure());
      setErr(true);
    }
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="adminAuth">
      <RiAdminFill className="icon" />
      <form className="loginBox" onSubmit={handleLogInAdmin}>
        <div className="input_wrap">
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={credentials.email}
            onChange={handleChange}
          />
        </div>
        <div className="input_wrap password">
          <label>Password</label>
          <input
            type={see ? "text" : "password"}
            className="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <span
            className="watchPass"
            onClick={() => {
              setSee(!see);
            }}
          >
            {see ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <span className="err">{err && "Email or Password is incorrect"}</span>
        <button className="btn">Đăng Nhập</button>
      </form>
    </div>
  );
}

export default AdminAuth;
