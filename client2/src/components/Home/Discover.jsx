import {
  aohoddienam,
  aokhoacnam,
  aothunnam,
  quanbonam,
} from "../../assets/home";
import Container from "../Container";
import SectionTitle from "./Reuse/SectionTitle.jsx";
import useStateCategories from "../../ReuseHook/useStateCategories.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    image: aohoddienam,
    title: "Áo Thun Nam",
  },
  {
    id: 3,
    image: aokhoacnam,
    title: "Váy",
  },
  {
    id: 2,
    image: aothunnam,
    title: "Áo Sơ Mi",
  },
  {
    id: 4,
    image: quanbonam,
    title: "Áo Liền Quần",
  },
];

const DiscoverCard = ({ card, categoryTitle }) => {
  return (
    <Link to={`products?category=${categoryTitle}`}>
      <div className="w-[400px] h-[400px] relative rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform">
        <img src={card.image} alt="discover_image" />
        <div className="absolute bottom-10 capitalize left-10 text-[#6D9886] font-bold md:text-[1.4rem] text-[40px]">
          {categoryTitle}
        </div>
      </div>
    </Link>
  );
};

export default function Discover() {
  const [category, setCategory] = useState([]);
  useStateCategories(setCategory);

  return (
    <section className="my-14 mt-[10rem]">
      <Container>
        <div>
          <SectionTitle title="Khám phá" />
          <div className="grid lg:grid-cols-4 mt-8 sm:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
            {cards.map((card) => (
              <DiscoverCard
                card={card}
                key={card.id}
                categoryTitle={category?.[card.id - 1]?.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
