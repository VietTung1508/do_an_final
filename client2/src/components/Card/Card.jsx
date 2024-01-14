import { Link } from "react-router-dom";
import "./Card.scss";
import { MdFavoriteBorder } from "react-icons/md";
const Card = ({ product }) => {
  const { _id, title, image, color, price, price_sale } = product;
  return (
    <div className="card">
      <div className="image-wrapper">
        <Link to={`/product/${_id}`}>
          <img src={image.url} alt="" className="card-image" />
        </Link>
        <MdFavoriteBorder className="icon" />
      </div>
      <div className="info-wrapper">
        <Link to={`/product/${_id}`}>
          <h5 className="card-title">{`${
            title.length < 30 ? title : title.slice(0, 30) + "..."
          }`}</h5>
        </Link>

        <div className="card-price-wrapper">
          {price_sale && (
            <h2 className="card-price-sale">
              {price_sale.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </h2>
          )}

          <h2 className={`card-price ${price_sale && "sale"}`}>
            {price_sale ? (
              <strike>
                {price.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}
              </strike>
            ) : (
              price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })
            )}
          </h2>
        </div>
        <div className="colors">
          {color.map((c) => (
            <div
              key={c.color}
              className="card-color"
              style={{ backgroundColor: c.toLowerCase() }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
