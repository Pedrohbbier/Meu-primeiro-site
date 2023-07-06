"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiperInicio.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SlideInicio() {
  return (
    <>
      <Swiper id='swiperInicio'
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='./SwiperInicio/Swinicio1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./SwiperInicio/Swinicio2.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./SwiperInicio/Swinicio3.jpg'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
