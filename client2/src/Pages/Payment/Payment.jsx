import React, { useEffect } from "react";
import "./Payment.scss";
import { FiPackage } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";
import axiosClient from "../../api/axiosClient";
import { resetCart } from "../../redux/cartSlice";

const Payment = () => {
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.products);
  const totalPrice = cart.reduce(
    (pre, acc) => pre + acc.product.price * acc.quantity,
    0
  );

  const totalSalePrice = cart.reduce(
    (pre, acc) =>
      pre +
      (acc.product.price_sale
        ? acc.product.price - acc.product.price_sale * acc.quantity
        : 0),
    0
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("Vui lòng đăng nhập trước khi thanh toán");
      navigate("/auth");
    }
  }, []);

  console.log(cart);
  useEffect(() => {
    if (cart.length < 1) {
      alert("Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán");
      navigate("/products");
    }
  }, []);

  const handleNewOrder = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("order/create", {
        products: cart.map((c) => {
          return { product: c.product._id, quantity: c.quantity };
        }),
        user: user.user._id,
        payment: "COD",
        total: totalPrice - totalSalePrice,
        pending: false,
      });
      navigate("/account");
      dispatch(resetCart());
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="payment">
      <div
        className="backToCart"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <FaArrowLeftLong />
        <p>Trở lại trang giỏ hàng</p>
      </div>
      <img className="logo" src="./images/logo.png" alt="" />
      <h1 className="payment-page-title">Thanh Toán</h1>
      <div className="payment_container">
        <div className="payment_left">
          <div className="user-infomation">
            <h3 className="user-infomation-title">Thông Tin Của Tôi</h3>
            <Link to="/account?page=settings">
              <FaPen className="editBtn" />
            </Link>
            <div className="user-infomation-wrap">
              <div className="user-infomation-wrapper">
                <label>Email:</label>
                <p>{user && user.user.email}</p>
              </div>
              <div className="user-infomation-wrapper">
                <label>Tên người dùng:</label>
                <p>{user && user.user.username}</p>
              </div>
            </div>
            <div className="user-infomation-wrap">
              <div className="user-infomation-wrapper">
                <label>Số điện thoại:</label>
                <p>{user && user.user.phone}</p>
              </div>
              <div className="user-infomation-wrapper">
                <label>Địa chỉ:</label>
                <p>{user && user.user.address}</p>
              </div>
            </div>
          </div>
          <div className="title-detail-order">
            <h3>Chi tiết đơn hàng</h3>
            <span>{cart.length} sản phẩm</span>
          </div>
          <div className="user-order-details">
            <div className="header">
              <div className="left">
                <FiPackage className="icon" />
                <div>
                  <p>Gói Hàng</p>
                  <span>{cart.length} sản phẩm</span>
                </div>
              </div>
              <div className="right">
                <h3>Được vẩn chuyển bởi</h3>
                <p>Viettel Post</p>
              </div>
            </div>
            <div className="details-list">
              {cart.map((t) => (
                <div className="detail-image-wrapper">
                  <img
                    className="detail-image"
                    src={t.product.image.url}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="payment_right">
          <div className="payemnt-discounts">
            <h3>Mã Giảm Giá</h3>
            <p>Sử dụng mã giảm giá</p>
          </div>
          <hr />
          <div className="payment-right-price">
            <div className="payment-right-info">
              <h3>Giá trị đơn hàng</h3>
              <h3>Giảm giá</h3>
              <h3>Phí vận chuyển</h3>
            </div>
            <div className="payment-right-info">
              <p>
                {totalPrice.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p className="price_sale">
                {totalSalePrice.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p>Miễn phí</p>
            </div>
          </div>
          <hr />
          <div className="total_price">
            <h3>Tổng Tiền</h3>
            <span>
              {" "}
              {(totalPrice - totalSalePrice).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <p className="dk">
            Bằng cách tiếp tục, bạn đồng ý với Điều khoản và Điều kiện chung của
            H&M.
          </p>
          <p className="dk">
            Chúng tôi sẽ xử lý dữ liệu cá nhân của bạn theo Thông báo về quyền
            riêng tư của H&M. Xin lưu ý rằng số tiền thuế chỉ là ước tính và số
            tiền cuối cùng có thể thay đổi. Nếu thuế ước tính được trình bày
            dưới dạng TBD thì giá trị đơn hàng không bao gồm bất kỳ khoản thuế
            nào và thuế này sẽ được cộng thêm khi các mặt hàng được vận chuyển.
          </p>
          <Link to="/payment">
            <button onClick={handleNewOrder} className="btnPayment">
              Xác Nhận Thanh Toán
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
