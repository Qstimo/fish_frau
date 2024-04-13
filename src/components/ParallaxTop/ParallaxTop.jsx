import cls from './ParallaxTop.module.scss';
import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';

const ParallaxTop = () => {
    const [offSetY, setOffSetY] = useState(100)

    const handleScroll = () => setOffSetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div  className={cls.ParallaxTop}>
            {/* <img style={{ transform: `translateY(${offSetY * 0.3}px) scale(2) translateZ(-1px) ` }} className={cls.ParallaxTop_img} src={parallax} alt="parallax" /> */}
            <div style={{ transform: `translateY(${offSetY * 0.3}px) scale(2) translateZ(-1px) ` }} className={cls.ParallaxTop_img}  alt="parallax" />
        </div>
    );
};

export default ParallaxTop;