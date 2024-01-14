import React, {useEffect, useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {Link} from "react-router-dom";

const BestSeller = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
            setProducts(data)
        })
    }, [])

    const bestSeller = products.filter((item) => item.status === "Best Seller");
    // console.log(bestSellers)
    return (
        <>
            <div className="text-center">
                <h2 className="text-3xl font-semibold capitalize mb-5">
                    Best Sellers
                </h2>
                <p className="text-black/75 capitalize md:w-2/3 mx-auto mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bestSeller.map((product) => (
                        <SwiperSlide key={product.id}>
                            <Link to={`/shop/${product.id}`}>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="mx-auto w-96 hover:scale-105 transition-all duration-300"
                                />
                            </Link>
                            <div className="mt-4 px-4">
                                <h4 className="text-base font-semibold mb-2">{product.title}</h4>

                                <div className="flex justify-between">
                                    <p className="text-black/50">{product.category}</p>
                                    <p className="font-semibold">${product.price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default BestSeller;