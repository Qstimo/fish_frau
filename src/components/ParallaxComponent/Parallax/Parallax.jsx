import cls from './Parallax.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const Parallax = ({ background }) => {


    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <div className={cls.box}>
            <div className={cls.ParallaxTop}>
                <img
                    style={{ transform: `translateY(-${offsetY * 0.5}px) scale(2) translateZ(-1px)` }}
                    className={cls.ParallaxTop_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </div>
    );
};

export default Parallax;