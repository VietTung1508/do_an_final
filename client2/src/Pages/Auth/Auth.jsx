import React, { Fragment, useState } from "react";
import { FaCircleArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa6";
import "./Auth.scss";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";

const Auth = () => {
  const [auth, setAuth] = useState("register");
  const [passwordSee, setPasswordSee] = useState(false);
  const [confirmPasswordSee, setConfirmPasswordSee] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const [value, setValue] = useState({
    username: "",
    phone: "",
    password: "",
    email: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleAuthForm = () => {
    if (auth === "login") {
      setAuth("register");
    } else {
      setAuth("login");
    }
    setValue({
      username: "",
      phone: "",
      password: "",
      email: "",
    });
    setErr("");
    setConfirmPassword("");
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (confirmPassword !== value.password) {
        alert(
          "Mật Khẩu và Nhập Lại Mật Khẩu Không Trùng Khớp. Vui Lòng Kiểm Tra Lại"
        );
      } else {
        setIsLoading(true);
        if (auth === "register") {
          await axiosClient.post("auth/register", value);
          setAuth("login");
          setIsLoading(false);
        } else {
          dispatch(loginStart());
          const res = await axiosClient.post("auth/login", {
            email: value.email,
            password: value.password,
          });
          dispatch(
            loginSuccess({ user: res.data, token: res.data.accessToken })
          );
          navigate("/");
          setIsLoading(false);
        }
      }
    } catch (e) {
      setErr(e.response.data.message);
      dispatch(loginFailure());
      setIsLoading(false);
    }
  };

  return (
    <div className="authPage">
      <Link to="/">
        <div className="back-icon">
          <FaCircleArrowLeft />
        </div>
      </Link>
      <form onSubmit={handleAuth} className="auth-form-box">
        <div className="auth-form-image-wrapper">
          <img className="auth-form-image" src="./images/authbackground.jpg"  alt={'alt'}/>
        </div>
        <div className="auth-form-infomation">
          <h1>
            {auth === "register"
              ? "Đăng Ký Để Trở Thành Thành Viên Trong Hôm Nay."
              : "Đăng Nhập Ngay Để Nhận Ngay Nhiều Ưu Đãi"}
          </h1>
          <p className="subTitle">
            Hãy trở thành thành viên để không bỏ lỡ các ưu đãi, giảm giá và
            voucher dành riêng cho bạn.
          </p>
          {auth === "register" && (
            <Fragment>
              <div className="auth-form-input-wrapper">
                <label>Tên Đăng Nhập</label>
                <input
                  name="username"
                  disabled={isLoading}
                  required
                  type="text"
                  value={value.username}
                  onChange={handleChange}
                  placeholder="Nhập tên người dùng"
                />
              </div>
              <div className="auth-form-input-wrapper">
                <label>Số Điện Thoại</label>
                <input
                  name="phone"
                  required
                  disabled={isLoading}
                  type="number"
                  value={value.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </Fragment>
          )}
          <div className="auth-form-input-wrapper">
            <label>Email</label>
            <input
              name="email"
              required
              disabled={isLoading}
              type="email"
              value={value.email}
              onChange={handleChange}
              placeholder="Nhập email"
            />
          </div>
          <div className="auth-form-input-wrapper password">
            <label>Mật Khẩu</label>
            <input
              name="password"
              required
              disabled={isLoading}
              type={passwordSee ? "text" : "password"}
              value={value.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
            />
            <span
              className="watchPass"
              onClick={() => {
                setPasswordSee(!passwordSee);
              }}
            >
              {passwordSee ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="auth-form-input-wrapper confirmPassword">
            <label>Nhập Lại Mật Khẩu</label>
            <input
              disabled={isLoading}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={confirmPasswordSee ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
            />
            <span
              className="watchConfirmPass"
              onClick={() => {
                setConfirmPasswordSee(!confirmPasswordSee);
              }}
            >
              {confirmPasswordSee ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <span className="err">{err && err}</span>
          <p className="auth-link-wrapper">
            Đã có tài khoản rồi?{" "}
            <span className="auth-link" onClick={handleAuthForm}>
              {" "}
              {auth === "login" ? "Đăng Ký" : "Đăng Nhập"}
            </span>
          </p>
          <button className="auth-btn" disabled={isLoading}>
            {auth === "register" ? "Đăng Ký" : "Đăng Nhập"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
