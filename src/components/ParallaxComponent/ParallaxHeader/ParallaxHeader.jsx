import cls from './ParallaxHeader.module.scss';
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';
import OrderOnline from '../../OrderOnline/OrderOnline';

const ParallaxHeader = ({ background }) => {


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
        <div className={cls.box}>
            <div className={cls.ParallaxHeader}>
                <img
                    style={{ transform: `translateY(${newHeigth * 9}px) scale(2) translateZ(-1px) ` }}
                    className={cls.ParallaxHeader_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </div>
    );
};

export default ParallaxHeader;