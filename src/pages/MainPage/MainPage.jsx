import React from 'react'
import cls from './MainPage.module.scss'
import { Info } from '../../components/Info/Info'
import WindowImg from '../../components/WindowImg/WindowImg'
import Chef from '../../components/ChefInfo/Chef'
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu'
import Slider from '../../components/Slider'
//img-parallax
import background1 from '../../img/b4.png'
import background2 from '../../img/b3.png'
import Parallax from '../../components/ParallaxComponent/Parallax/Parallax'
import ParallaxMain from '../../components/ParallaxComponent/ParallaxMain/ParallaxMain'
import Providing from '../../components/Providing/Providing'





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
            <Parallax background={background2} />
            <div className={cls.backgroung}>
                <div className={cls.containerPresentationMenu}>
                    <PresentationMenu />
                </div>
            </div>
            <ParallaxMain background={background1} />
            <div className={cls.container}>
                <Providing/>
            </div>
            <Slider />
        </div>
    )
}