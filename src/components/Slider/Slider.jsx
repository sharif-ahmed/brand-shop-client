/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import SingleSlide from "./SingleSlide";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Slider = ({ products }) => {
    const len = products.length;
    return (
        <div className="carousel w-full ">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                {
                    products?.map((product, idx) => <SwiperSlide key={idx}><SingleSlide product={product} ></SingleSlide></SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;