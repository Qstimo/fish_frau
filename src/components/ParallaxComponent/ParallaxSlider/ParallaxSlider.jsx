import cls from './ParallaxSlider.module.scss'
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';

const ParallaxSlider = ({ background }) => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <>
            <div className={cls.ParallaxSlider}>
                <img
                   style={{ transform: `translateY(-${offsetY * 0.5}px) scale(2) translateZ(-1px)` }}
                    className={cls.ParallaxSlider_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </>
    );
};

export default ParallaxSlider;