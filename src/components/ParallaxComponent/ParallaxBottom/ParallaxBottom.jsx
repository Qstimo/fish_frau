import cls from './ParallaxBottom.module.scss'
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';

const ParallaxBottom = ({ background }) => {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <>
            <div className={cls.ParallaxBottom}>
                <div className={cls.title}>
                    <div className={cls.title_box}>
                        <p className={cls.title_item}>Ресторан Рыба</p>
                        <p className={cls.title_bottom}>ЭТО</p>
                    </div>
                </div>
                <img
                    style={{ transform: `translateY(-${offsetY * 0.5}px) scale(2) translateZ(-1px)` }}
                    className={cls.ParallaxBottom_img}
                    alt="parallax"
                    src={background}
                />
            </div>
        </>
    );
};

export default ParallaxBottom;