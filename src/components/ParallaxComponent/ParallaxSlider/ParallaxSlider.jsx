import cls from './ParallaxSlider.module.scss'
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';

const ParallaxSlider = ({ background }) => {


    const [offSetY, setOffSetY] = useState(100)
    const [newHeigth, setNewHeigth] = useState(0)


    const handleScroll = () => setOffSetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
        setNewHeigth(offSetY - 0.9 * offSetY)
    }, [offSetY])



    return (
        <>
            <div className={cls.ParallaxSlider}>
                <img
                    style={{ transform: `translateY(${newHeigth * 9}px) scale(2) translateZ(-1px) ` }}
                    className={cls.ParallaxSlider_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </>
    );
};

export default ParallaxSlider;