import React from 'react'
import cls from './MainPage.module.scss'
import { Info } from '../../components/Info/Info'
import WindowImg from '../../components/WindowImg/WindowImg'
import Chef from '../../components/ChefInfo/Chef'
import ParallaxTop from '../../components/ParallaxTop/ParallaxTop'
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu'
import Slider from '../../components/Slider'





export const MainPage = () => {
    return (
        <div className={cls.MainPage} >
            <WindowImg />

            <div className={cls.chefBack}>
                <div className={cls.container}>
                    <Info />
                    <Chef />
                </div>
            </div>
            <ParallaxTop />
            <div className={cls.backgroung}>
                <div className={cls.container}>
                    {/* <PresentationMenu /> */}
                </div>
            </div>
            <Slider />
        </div>
    )
}