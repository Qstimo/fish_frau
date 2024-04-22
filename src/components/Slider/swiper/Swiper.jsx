import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.scss';

import { Pagination, Navigation } from 'swiper/modules';



export default function SwiperRender({ slides = [''] }) {
  
  return (
    <div className='swiper_container'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map(slide => <SwiperSlide key={slide} >“{slide}”</SwiperSlide>)}
      </Swiper>
    </div >
  );
}
