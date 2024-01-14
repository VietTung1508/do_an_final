import React, { useEffect, useState } from "react";
import "./HomeProducts.scss";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const HomeProducts = () => {
  const [parent, enableAnimations] = useAutoAnimate();
  const [hpProducts, setHpProducts] = useState([]);
  const [filtered, setFiltered] = useState(hpProducts && hpProducts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/product/products/allProducts"
        );
        const data = await response.json();
        setHpProducts(data);
        if (data) setFiltered(data);
        console.log(hpProducts.category);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().then(() => console.log());
  }, []);

  console.log(hpProducts);

  const filter = (type) => {
    setFiltered(hpProducts.filter((p) => p.category === type));
  };
  const unFilter = () => {
    setFiltered(hpProducts);
  };

  // console.log(hpProducts)
  return (
    <div className={"hpContainer"}>
      <img src="" alt="" />
      <h1 className={"hpFeatured"}>Featured Products</h1>

      <div className={"groupProducts"}>
        <ul className={"menu"}>
          <li onClick={() => unFilter()}>All</li>
          <li onClick={() => filter("men")}>Nam</li>
          <li onClick={() => filter("women")}>Nữ</li>
          <li onClick={() => filter("kid")}>Trẻ em</li>
        </ul>
        <div className={"hpList"} ref={parent}>
          {filtered.map((prod, i) => (
            <div
              key={prod._id}
              className={"hpProducts"}
              style={{ backgroundImage: `url(${prod?.image?.url})` }}
            >
              <div className="left-s">
                <div className="hpName">
                  <span>{prod.title}</span>
                </div>
                {Number(prod?.price_sale) > 0 ? (
                  <>
                    <span className="text-xl font-bold text-right hover:text-green-300">
                      {prod?.price_sale?.toLocaleString()} VND
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-sm select-none text-right">
                      {prod?.price?.toLocaleString()} VND
                    </span>
                  </>
                )}
                {/*<span>{prod.price}.VND</span>*/}
                <div>View now</div>
              </div>
              <img
                src={prod?.image?.url}
                alt={prod.title}
                className={"img-p"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
