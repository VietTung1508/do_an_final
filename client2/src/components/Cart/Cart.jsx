import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { useSelector } from "react-redux";
const CartItem = ({ item, quan }) => {
  return (
    <div className="cartItem">
      <div className="cartItem_img_wrapper">
        <img className="cartItem_img" src={item.image.url} />
      </div>
      <div className="cartItem_info">
        <div className="cartItem_title">{item.title}</div>
        <div className="cartItem_price">
          <div className={`price ${item.price_sale && "price_sale"}`}>
            {item.price_sale
              ? item.price_sale.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })
              : item.price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
          </div>
        </div>
        <div className="cartItem_quan">Số lượng: {quan}</div>
        <div className="cartItem_color">Màu sắc: {item.color}</div>
        <div className="cartItem_size">Kích cỡ: {item.size[0]}</div>
      </div>
    </div>
  );
};

const Cart = () => {
  const items = useSelector((state) => state.cart.products);
  const totalPrice = items.reduce(
    (pre, acc) => pre + acc.product.price * acc.quantity,
    0
  );

  const totalSalePrice = items.reduce(
    (pre, acc) =>
      pre +
      (acc.product.price_sale
        ? acc.product.price - acc.product.price_sale * acc.quantity
        : 0),
    0
  );
  return (
    <div className="cart">
      {items.length > 0 ? (
        <div className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.product._id}
              item={item.product}
              quan={item.quantity}
            />
          ))}
        </div>
      ) : (
        <div className="emptyCart">
          <h2>Oops! Giỏ hàng bạn đang bị trống!</h2>
          <Link to="/products">
            <button>MUA NGAY</button>
          </Link>
        </div>
      )}
      <hr />
      <div className="sub-price">
        <div className="sub-price-item">
          <h3>Giá trị đơn hàng</h3>
          <h3>Giảm giá</h3>
          <h3>Phí giao hàng</h3>
        </div>
        <div className="sub-price-item">
          <p>
            {totalPrice.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p className="sub_price_sale">
            {totalSalePrice.toLocaleString("vi", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <p>Miễn Phí</p>
        </div>
      </div>
      <hr />
      <div className="price">
        <h3>Tổng</h3>
        <p>
          {" "}
          {(totalPrice - totalSalePrice).toLocaleString("vi", {
            style: "currency",
            currency: "VND",
          })}
        </p>
      </div>
      <div className="action_wrapper">
        <div className="actions">
          <Link to="/payment">
            <button className="btnPayment">Thanh Toán</button>
          </Link>
          <Link to="/cart">
            <button className="btnCart">Giỏ Hàng</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
