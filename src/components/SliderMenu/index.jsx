import React, { useState } from 'react'
import Swiper from './swiper/Swiper'
import SwiperRender from './swiper/Swiper'
import cls from './slider.module.scss'
import { classNames } from '../../helpers/classnames'



function SliderMenu({ slidesList, tab, setTab, }) {

    return (
        <div className={cls.Slider}>
            <div className='content'>
                <div className={cls.Slider_content}>
                    <SwiperRender slides={slidesList} tab={tab} setTab={setTab}/>
                </div>
            </div>
                <hr />
        </div>
    )
}

export default SliderMenu