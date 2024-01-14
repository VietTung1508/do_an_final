import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import './TopSlider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const TopSlider = () => {
    return (
        <div className={'sContainer'}>
            <Swiper
            sidesPerView = {3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            >

                <SwiperSlide>
                    1
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TopSlider;