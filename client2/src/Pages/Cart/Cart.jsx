import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.scss";
import { RiDeleteBinLine } from "react-icons/ri";
import { decrease, deleteProduct, increase } from "../../redux/cartSlice";

const CartItem = ({ item, quan, index }) => {
  const dispatch = useDispatch();
  const handleDelete = (i) => {
    dispatch(deleteProduct(i));
  };

  const handleDecrease = (item) => {
    dispatch(decrease(item));
  };

  const handleIncrese = (item) => {
    dispatch(increase(item));
  };

  console.log(item);
  return (
    <div className="cart_page_item">
      <div className="image_wrapper">
        <img src={item.image.url} alt="" className="image" />
      </div>
      <div className="info_wrapper">
        <div>
          <h4 className="item-title">{item.title}</h4>
          <div className={`item-price-wrapper`}>
            {item.price_sale ? (
              <div className="item-price">
                <strike>
                  {item.price.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </strike>
                <div className="salePrice">
                  {item.price_sale.toLocaleString("vi", {
                    style: "currency",
                    currency: "VND",
                  })}
                </div>
              </div>
            ) : (
              item.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })
            )}
          </div>
        </div>
        <div className="item-info-wrapper">
          <h4 className="item-id">
            <span>Mã sản phẩm:</span> {item._id}
          </h4>
          <h4 className="item-category">
            <span>Danh mục:</span> {item.category}
          </h4>
        </div>
        <div className="item-info-wrapper">
          <h5>
            <span>Kích cỡ:</span> {item.size}
          </h5>
          <h5>
            <span>Màu sắc:</span> {item.color}
          </h5>
        </div>
        <div className="info_actions">
          <p className="btn-decrese" onClick={() => handleDecrease(item)}>
            -
          </p>
          <p className="quantity">{quan}</p>
          <p className="btn-increase" onClick={() => handleIncrese(item)}>
            +
          </p>
        </div>
      </div>
      <RiDeleteBinLine
        className="bin_icon"
        onClick={() => handleDelete(index)}
      />
    </div>
  );
};

const Cart = () => {
  const user = useSelector((state) => state.user.user);
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

  console.log(items);
  return (
    <div className="cart_page">
      <h2 className="title">Giỏ Hàng</h2>
      <div className="cart_container">
        <div className="cart_left">
          {items.length > 0 ? (
            <div className="cart-items">
              {items.map((item, i) => (
                <CartItem index={i} item={item.product} quan={item.quantity} />
              ))}
            </div>
          ) : (
            <div className="emptyCart">
              <img src="./images/emptyCart.png" alt="" />
              <h2>Oops! Giỏ hàng bạn đang bị trống!</h2>
              <p>Có vẻ như bạn vẫn chưa thêm sản phẩm nào vào giỏ hàng</p>
              <Link to="/products">
                <button>MUA NGAY</button>
              </Link>
            </div>
          )}
        </div>
        <div className="cart_right">
          <div className="cart-discounts">
            <h3>Mã Giảm Giá</h3>
            <p>Sử dụng mã giảm giá</p>
          </div>
          {user ? (
            <div>user discount</div>
          ) : (
            <div className="loginButton_wrapper">
              <p>Đăng nhập để sử dụng mã giảm giá thành viên</p>
              <Link to="/auth">
                <button className="btnLogIn">Đăng Nhập</button>
              </Link>
            </div>
          )}
          <hr />
          <div className="cart-right-price">
            <div className="cart-right-info">
              <h3>Giá trị đơn hàng</h3>
              <h3>Giảm giá</h3>
              <h3>Phí vận chuyển</h3>
            </div>
            <div className="cart-right-info">
              <p>
                {totalPrice.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <p className="price-sale">
                {totalSalePrice
                  ? totalSalePrice.toLocaleString("vi", {
                      style: "currency",
                      currency: "VND",
                    })
                  : 0}
              </p>
              <p>Miễn phí</p>
            </div>
          </div>
          <hr />
          <div className="total_price">
            <h3>Tổng Tiền</h3>
            <span>
              {(totalPrice - totalSalePrice).toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <Link to="/payment">
            <button className="btnPayment">Tiến hành thanh toán</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
