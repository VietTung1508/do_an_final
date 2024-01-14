import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Product.scss";
import { CgShoppingCart } from "react-icons/cg";

import { StarIcon } from "@heroicons/react/20/solid/index.js";
import { RadioGroup } from "@headlessui/react";
import { Avatar, Chip, Stack } from "@mui/material";
import Transition from "../../transition.jsx";
import ImageMagnifier from "../../components/ImageMagnifier/ImageMagnifier.jsx";
import IncreDecreButton from "../../components/Smol/IncreDecreButton.jsx";
import { IoInformationCircleSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { CiRuler } from "react-icons/ci";
import useStateProduct from "../../ReuseHook/useStateProduct.jsx";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice.js";

const Product = () => {
  const defaultProduct = {
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: false },
      { name: "XL", inStock: true },
    ],
  };

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [products, setProducts] = useState([]);
  const [related, setRelated] = useState([]);
  const [cat, setCat] = useState("");
  const [showModal, setShowModal] = React.useState(false);

  console.log(quantity);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/product/allProducts"
        );
        const data = await response.json();

        const foundProduct = data.find((p) => p._id === id);

        if (foundProduct) {
          setProducts(foundProduct);
          setCat(foundProduct.category);
          const relatedP = data.filter((p) => cat === p.category);
          setRelated(relatedP);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData().then(() => console.log());
  }, [id, cat]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedSize, setSelectedSize] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    dispatch(addToCart({ product: products, quantity: quantity }));
  };
  return (
    <div className={"bContainer grid grid-rows-2"}>
      <div className="product grid grid-cols-3 ">
        <div className="left px-4 pb-16 pt-10 sm:px-5 col-span-2">
          <div className="images1">
            {/*<img src={image?.[0]} alt={title} onClick={()=>setSelectedImg(0)}/>*/}
            {/*<img src={image?.[1]} alt={title} onClick={()=>setSelectedImg(1)}/>*/}
            {/*<img src={image?.[2]} alt={title} onClick={()=>setSelectedImg(2)}/>*/}
            {/*<img src={image?.[3]} alt={title} onClick={()=>setSelectedImg(3)}/>*/}
          </div>
          <div className="mainImg">
            <ImageMagnifier
              imageUrl={products?.image?.url}
              alt={products?.title}
            />
            {/*<img src={products?.image?.url} loading={"lazy"} alt={products?.title}*/}
            {/*     className={'bigImage'}/>*/}
          </div>
        </div>
        <div className="right mt-4 lg:row-span-3 lg:mt-7 col-span-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {products?.title}
          </h1>
          {products?.price_sale > 0 ? (
            <>
              {/*<span*/}
              {/*    // className="text-3xl tracking-tight text-gray-900 line-through">{products?.price?.toLocaleString()} VND</span>*/}
              <span className="text-3xl tracking-tight">
                {products?.price_sale?.toLocaleString()} VND
              </span>
            </>
          ) : (
            <span className="text-3xl tracking-tight">
              {products?.price?.toLocaleString()} VND
            </span>
          )}

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
          </div>
          <h3 className={"text-2xl font-bold"}>Miêu tả sản phẩm</h3>
          <p>{products?.desc}</p>
          <button
            type="submit"
            className="button mt-10 flex items-center justify-center rounded-md border border-transparent bg-indigo-600
                    px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleAddToCart}
          >
            <CgShoppingCart size={30} className={"mr-3 mb-1"} />
            Thêm vào giỏ
          </button>

          <div className="mt-10">
            <div className="quantity">
              <div
                className="btnQuantity"
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </div>
              {quantity}
              <div
                className="btnQuantity"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </div>
            </div>
            {/* Colors */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mt-4">
                Màu hiện có
              </h3>
              <RadioGroup
                value={selectedColor}
                onChange={setSelectedColor}
                className="mt-4"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a color
                </RadioGroup.Label>
                <div className="flex items-center space-x-3">
                  {defaultProduct.colors.map((color) => (
                    <RadioGroup.Option
                      key={color.name}
                      value={color}
                      className={({ active, checked }) =>
                        classNames(
                          color.selectedClass,
                          active && checked ? "ring ring-offset-1" : "",
                          !active && checked ? "ring-2" : "",
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                        )
                      }
                    >
                      <RadioGroup.Label as="span" className="sr-only">
                        {color.name}
                      </RadioGroup.Label>
                      <span
                        aria-hidden="true"
                        className={classNames(
                          color.class,
                          "h-8 w-8 rounded-full border border-black border-opacity-10"
                        )}
                      />
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Sizes */}
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">
                  Cỡ hiện có
                </h3>
                <CiRuler
                  size={20}
                  className={
                    "text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  }
                />
                <button
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Hướng dẫn chọn size
                </button>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="text-1xl font-semibold">
                              Chọn size
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <img src="../../assets/size02.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </div>

              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="mt-4"
              >
                <RadioGroup.Label className="sr-only">
                  Choose a size
                </RadioGroup.Label>
                <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  {defaultProduct.sizes.map((size) => (
                    <RadioGroup.Option
                      key={size.name}
                      value={size}
                      disabled={!size.inStock}
                      className={({ active }) =>
                        classNames(
                          size.inStock
                            ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                            : "cursor-not-allowed bg-gray-50 text-gray-200",
                          active ? "ring-2 ring-indigo-500" : "",
                          "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                        )
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <RadioGroup.Label as="span">
                            {size.name}
                          </RadioGroup.Label>
                          {size.inStock ? (
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                "pointer-events-none absolute -inset-px rounded-md"
                              )}
                              aria-hidden="true"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                stroke="currentColor"
                              >
                                <line
                                  x1={0}
                                  y1={100}
                                  x2={100}
                                  y2={0}
                                  vectorEffect="non-scaling-stroke"
                                />
                              </svg>
                            </span>
                          )}
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          </div>
          <hr />
          {/*<div className="links">*/}
          {/*    <div className="item">*/}
          {/*        <GrFavorite/> Add to Wishlist*/}
          {/*    </div>*/}
          {/*    <div className="item">*/}
          {/*        <FaBalanceScale/> Add to Compare*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className="info">
            {/*<span>Product Type: {products?.category}</span>*/}

            <Stack direction="row" spacing={1}>
              <Chip
                avatar={<Avatar alt="Natacha" src="" />}
                label={products?.category}
                variant="outlined"
              />
            </Stack>

            <Stack direction="row" spacing={1}>
              <Chip
                avatar={<Avatar alt="Natacha" src="" />}
                label={cat.tag}
                variant="outlined"
              />
            </Stack>
          </div>
          <hr />
          <div className={"grid grid-cols-8 px-3"}>
            <IoInformationCircleSharp size={20} className={"col-span-1"} />
            <p className={"col-span-7 italic text-sm"}>
              Giá sản phẩm đã bao gồm VAT, không bao gồm phí giao hàng. Thời
              gian giao hàng dự kiến 3-7 ngày làm việc. Mọi thắc mắc vui lòng
              xem thêm tại trang Dịch vụ khách hàng. Tất cả hàng hóa trên
              website này đều do Công ty TNHH H&M Hennes &Mauritz Việt Nam (trụ
              sở 235 Đồng Khởi, Bến Nghé, Quận 1, TPHCM) chịu trách nhiệm.
            </p>
          </div>
        </div>
      </div>
      <div className={"relatedProducts overflow-hidden text-center mt-[3rem]"}>
        <h2 className="text-[1.5rem] place-items-center">
          <b>Sản phẩm liên quan</b>
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: -100,
            depth: 500,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper w-auto"
        >
          {related?.map((related) => (
            <SwiperSlide key={related.id}>
              <Link to={`/product/${related?._id}`}>
                <img src={related?.image?.url} alt={related.title} />
              </Link>
              <Link to={`/product/${related?._id}`}>
                <h2>{related.title}</h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Transition(Product);
