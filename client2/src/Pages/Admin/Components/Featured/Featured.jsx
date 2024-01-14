import React from "react";
import { IoMdMore, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdExpandMore } from "react-icons/md";
import "./Featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {} from "react-icons/io";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Doanh Thu</h1>
        <IoMdMore />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={4} />
        </div>
        <p className="title">Tổng doanh thu trong ngày</p>
        <p className="amount">1.200.000 đ</p>
        <p className="desc">
          Xử lý giao dịch trước đó. Các khoản thanh toán cuối cùng có thể không
          được bao gồm
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Mục Tiêu</div>
            <div className="itemResult positive">
              <IoIosArrowUp />
              <div className="resultAmount">20.000.000 đ</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Tuần Trước</div>
            <div className="itemResult positive">
              <IoIosArrowUp />
              <div className="resultAmount ">32.000.000 đ</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Tháng Trước</div>
            <div className="itemResult negative">
              <IoIosArrowDown />
              <div className="resultAmount ">12.000.000 đ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
