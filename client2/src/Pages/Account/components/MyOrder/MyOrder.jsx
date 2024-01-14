import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "./MyOrder.scss";
import axiosClient from "../../../../api/axiosClient";
import { useSelector } from "react-redux";

const MyOrder = () => {
  const [orders, setOrders] = useState();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const getOrders = async () => {
      const res = await axiosClient.get(`order/orders/${user.user._id}`);
      setOrders(res.data);
    };
    getOrders();
  }, []);

  console.log(orders);
  return (
    <div className="order">
      <h3>Tất cả đơn hàng</h3>
      <div className="account_orders">
        {!orders ? (
          <div className="noOrder">
            <HiOutlineShoppingBag className="icon" />
            <p>Chưa có đơn hàng nào</p>
          </div>
        ) : (
          <div className="orders">
            {orders.map((order) => (
              <div className="order-item">
                <h5 className="id_order">Mã đơn hàng - {order._id}</h5>
                {order.products.map((product) => (
                  <div className="product-item">
                    <div className="image-product-wrapper">
                      <img src={product.product.image.url} />
                    </div>
                    <div className="info-product">
                      <h1>
                        Tên Sản Phẩm : <span>{product.product.title}</span>
                      </h1>
                      <h2>
                        Số Lượng : <span>{product.quantity}</span>
                      </h2>
                      <h2>
                        Danh Mục : <span>{product.product.category}</span>
                      </h2>
                      <h2>
                        Màu Sắc : <span>{product.product.color[0]}</span>
                      </h2>
                      <h2>
                        Mô Tả : <span>{product.product.desc}</span>
                      </h2>
                    </div>
                  </div>
                ))}
                <h5 className="total_order">Thanh Toán - {order.payment}</h5>
                <h5 className="total_order">
                  Tổng Tiền -{" "}
                  {order.total.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h5>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
