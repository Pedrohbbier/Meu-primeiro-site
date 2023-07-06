"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../globals.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slide() {
  return (
    <>
      <Swiper id='car'
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='./carrossel/Imagem 1.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./carrossel/Imagem 2.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./carrossel/Imagem 3.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./carrossel/Imagem 4.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./carrossel/Imagem 5.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='./carrossel/Imagem 6.jpg'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
