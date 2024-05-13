import cls from './ParallaxMain.module.scss';
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';
import OrderOnline from '../../OrderOnline/OrderOnline';

const ParallaxMain = ({ background }) => {


    const [offSetY, setOffSetY] = useState(100)
    const [newHeigth, setNewHeigth] = useState(0)


    const handleScroll = () => setOffSetY(window.scrollY)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => { 
        setNewHeigth(offSetY - 0.9 * offSetY)
    }, [offSetY])


    
    return (
        <div className={cls.box}>
            <OrderOnline/>
            <div className={cls.ParallaxTop}>
                <img
                    style={{ transform: `translateY(${newHeigth * 9}px) scale(2) translateZ(-1px) ` }}
                    className={cls.ParallaxTop_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </div>
    );
};

export default ParallaxMain;