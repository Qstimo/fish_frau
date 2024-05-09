import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import cls from '../slider.module.scss'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.scss';

import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-scroll';
import { classNames } from '../../../helpers/classnames';



export default function SwiperRender({ slides, tab, setTab }) {
  const swiperRef = useRef(null);
  
  const handleSlideClick = (index) => {
    setTab(() => index);
  };


  return (
    <div className='swiper_container_menu'>
      <Swiper
        ref={swiperRef}
        slidesPerView={'auto'}
        spaceBetween={20}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="menuSwiper"
      >
        {slides.map(({ title, index }) => (
          <SwiperSlide key={index}>
            <Link
              to="menuList" smooth={true} duration={500} onClick={() => handleSlideClick(index)}
            >
              <span className={classNames(cls.Tablist_item, { [cls.Tablist_item_active]: index === tab })}>
                {title}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
}