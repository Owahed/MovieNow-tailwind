import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./Slide.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

const Slide = () => {
    return (
        <div className="py-16 slide">
            <div className="my-6">
                <h4 className=" slide-header"><span style={{ color: "#007aff" }}>MoviesNow </span> TV Originals</h4>
                <p className="slide-para">Celebrity interviews, trending entertainment stories, and expert analysis.</p>
            </div>
            <>
                <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://dmitryvolkov.me/demo/flixtv/main/img/home/6.jpg" alt="" /></SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Slide;