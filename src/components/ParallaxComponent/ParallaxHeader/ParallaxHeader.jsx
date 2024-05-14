import cls from './ParallaxHeader.module.scss';
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';
import OrderOnline from '../../OrderOnline/OrderOnline';

const ParallaxHeader = ({ background }) => {


    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    
    return (
        <div className={cls.box}>
            <div className={cls.ParallaxHeader}>
                <img
                     style={{ transform: `translateY(-${offsetY * 0.5}px) scale(2) translateZ(-1px)` }}
                    className={cls.ParallaxHeader_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </div>
    );
};

export default ParallaxHeader;