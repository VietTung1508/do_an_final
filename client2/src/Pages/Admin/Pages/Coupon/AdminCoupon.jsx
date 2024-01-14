import React, { useEffect, useState } from "react";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminCoupon.scss";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const AdminCoupon = () => {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    async function getCoupons() {
      const res = await axiosClient.get("coupon/coupons");
      setCoupons(res.data);
    }

    getCoupons();
  }, [update]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Tên Mã Giảm Giá", flex: 2 },
    { field: "desc", headerName: "Mô Tả", flex: 2 },
    { field: "percentage", headerName: "Phần Trăm", flex: 2 },
  ];

  return (
    <div className="couponPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Mã Giảm Giá</h2>
          <h3 className="desc">
            Website này có <span>{coupons.length} </span> mã giảm giá
          </h3>
        </div>
        <button
          className="newCouponBtn"
          onClick={() => {
            navigate("/admin/coupons/new");
          }}
        >
          Thêm Mã Giảm Giá
          <span className="icon">
            <TiPlus />
          </span>
        </button>
      </div>
      <Datatable
        update={update}
        setUpdate={setUpdate}
        type="coupon"
        columns={columns}
        rows={coupons}
      />
    </div>
  );
};

export default AdminCoupon;
