import React, { useEffect } from 'react'
import cls from './MainPage.module.scss'
import { Info } from '../../components/Info/Info'
import Chef from '../../components/ChefInfo/Chef'
import PresentationMenu from '../../components/PresentationMenu/PresentationMenu'
import Slider from '../../components/Slider'
import Parallax from '../../components/ParallaxComponent/Parallax/Parallax'
import ParallaxMain from '../../components/ParallaxComponent/ParallaxMain/ParallaxMain'
import Providing from '../../components/Providing/Providing'
import AboutUs from '../../components/AboutUs'
import ParallaxBottom from '../../components/ParallaxComponent/ParallaxBottom/ParallaxBottom'
import ParallaxHeader from '../../components/ParallaxComponent/ParallaxHeader/ParallaxHeader'
//img-parallax
import background1 from '../../img/b4.png'
import background2 from '../../img/b3.png'
import background3 from '../../img/hero_bg_5.jpg'
import background5 from '../../img/hero_bg_3.jpg'




import imghome from '../../img/vve3.jpg'
import adaptivhome from '../../img/IMG_2912-3.jpg'

import ParallaxSlider from '../../components/ParallaxComponent/ParallaxSlider/ParallaxSlider'
import WindowImg from '../../components/WindowImg/WindowImg'
import { useDispatch } from 'react-redux'
import { fetchDataMenu } from '../../redux/Slice/SliceMenu/SliceMenu'
import { fetchDataBar } from '../../redux/Slice/SliceBar/SliceBar'
import { Element } from 'react-scroll'
import { LINKS } from '../../config'




export const MainPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDataMenu())
        dispatch(fetchDataBar())
    }, [])


    return (
        <div className={cls.MainPage} >
            <div className={cls.MainPage_fs}>
                <WindowImg img={imghome} adaptiv={adaptivhome} />
            </div>
            <div className={cls.chefBack}>
                <div className={cls.container}>
                    <Element name={LINKS.RESERVATION}>
                        <Info />
                    </Element>

                    <Chef />

                </div>
            </div>
            <Element name={LINKS.CHEF} >
                <Parallax background={background2} />
            </Element>
            <div className={cls.backgroung}>
                <div className={cls.containerPresentationMenu}>
                    <PresentationMenu />
                </div>
            </div>
            <Element name ={LINKS.ORDER}>
                <ParallaxMain background={background1} />
            </Element >
            <div className={cls.container}>
                <Providing />
            </div>
            <Element name={LINKS.ADVANTAGES}>
                <ParallaxBottom background={background3} />
                <AboutUs />
            </Element>
            <div className={cls.sliderBox}>
                <ParallaxSlider background={background5} />
                <div className={cls.sliderBox_slider}>
                    <Slider />
                </div>
            </div>
        </div>
    )
}