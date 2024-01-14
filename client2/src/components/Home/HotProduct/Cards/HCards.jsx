import HCard from "./HCard.jsx";
import { useEffect, useState } from "react";
import useStateTag from "../../../../ReuseHook/useStateTag.jsx";
import { Link } from "react-router-dom";

export default function HCards({ tag }) {
  let perPage = 8;
  if (tag !== "") {
    perPage = 7;
  }

  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState([]);

  useStateTag(tag, setCategory);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/product/allProducts"
        );
        const data = await response.json();
        const data2 = data.filter((product) =>
          category.some((cat) => cat.title === product.category)
        );
        setCards(data2);
        if (data2) setCards(data2);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().then(() => console.log());
  }, [tag, category]);

  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4 ">
      {cards?.slice(0, perPage)?.map((card) => (
        <HCard key={card.id} card={card} />
      ))}
      {tag !== "" ? (
        <Link
          to={`/products?${
            tag === "women"
              ? "category=Quần Dài Nữ"
              : tag === "men"
              ? "category=Áo Thun Nam"
                ? tag === "unisex"
                : "/products"
              : "category=Áo Liền Quần"
          }`}
          className={
            "bg-[#5c807162] px-5 py-2 rounded-md text-[#6D9886] text-[20px] font-medium"
          }
        >
          Xem thêm ...
        </Link>
      ) : (
        <></>
      )}
    </article>
  );
}
