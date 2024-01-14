import React from "react";
import { CiMap } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import "./CustomerCare.scss";

const CustomerCare = () => {
  return (
    <div className="customerCare">
      <h1 className="title">Chăm Sóc Khách Hàng</h1>
      <p className="subTitle">Hôm nay chúng tôi có thể làm gì để giúp bạn?</p>
      <div className="container">
        <div className="trackOrder">
          <CiMap className="icon" />
          <h3>TÔI MUỐN BIẾT ĐƠN HÀNG CỦA TÔI ĐANG Ở ĐÂU</h3>
          <p>Nhập mã số đơn hàng có trong email xác nhận đơn hàng của bạn.</p>
          <div className="trackOrder_inp">
            <label>Mã đơn hàng</label>
            <input type="text" />
          </div>
          <button>Theo dõi đơn hàng của tôi</button>
        </div>
        <div className="returnOrder">
          <div className="info">
            <TbTruckReturn className="icon" />

            <h3>TÔI MUỐN TRẢ LẠI SẢN PHẨM</h3>
            <p>
              Đăng ký trả hàng trực tuyến dễ dàng. Tất cả những gì bạn cần là mã
              số đơn hàng có trong email xác nhận đơn hàng và địa chỉ email được
              sử dụng khi bạn đặt hàng.
            </p>
          </div>
          <button>Đăng ký trả hàng</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCare;
