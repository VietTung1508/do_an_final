import React, { useState } from "react";
import "./AccountSetting.scss";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../../../api/axiosClient";
import { loginSuccess } from "../../../../redux/userSlice";
import { useNavigate } from "react-router-dom";

const AccountSetting = () => {
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    email: user && user.user.email,
    username: user && user.user.username,
    phone: user && user.user.phone,
    address: user && user.user.address,
  });

  const handleValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axiosClient.put("/auth/editUser", value);
      dispatch(loginSuccess({ user: res.data, token: res.data.accessToken }));
      navigate("/account");
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  return (
    <div className="accountSetting">
      <h3>Cài đặt</h3>
      <p>Bạn có thể quản lý tài khoản và các đăng ký tại đây</p>
      <form className="account_profile" onSubmit={handleSubmit}>
        <h4>Thông tin của tôi</h4>
        <div className="profile_inp">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            disabled={loading}
            onChange={handleValue}
            value={value.email}
            required
          />
        </div>
        <div className="profile_inp">
          <label>Tên Người Dùng</label>
          <input
            type="text"
            name="username"
            id="username"
            disabled={loading}
            onChange={handleValue}
            value={value.username}
            required
          />
        </div>
        <div className="profile_inp">
          <label>Số Điện Thoại</label>
          <input
            type="number"
            name="phone"
            disabled={loading}
            id="phone"
            onChange={handleValue}
            value={value.phone}
            required
          />
        </div>
        <div className="profile_inp">
          <label>Địa Chỉ</label>
          <textarea
            type="text"
            name="address"
            disabled={loading}
            id="address"
            onChange={handleValue}
            value={value.address}
          />
        </div>
        <button type="submit" className="btnSave">
          Lưu
        </button>
        <button type="buttom" className="btnCancel">
          Hủy
        </button>
      </form>
    </div>
  );
};

export default AccountSetting;
