import cls from './ParallaxBottom.module.scss'
// import parallax from '../../img/b4.png'
import { useState } from 'react';
import { useEffect } from 'react';

const ParallaxBottom = ({ background }) => {


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
            <div className={cls.ParallaxBottom}>
                <div className={cls.title}>
                    <div className={cls.title_box}>
                        <p className={cls.title_item}>Ресторан Рыба</p>
                        <p className={cls.title_bottom}>ЭТО</p>
                    </div>
                </div>
                <img
                    style={{ transform: `translateY(${newHeigth * 9}px) scale(2) translateZ(-1px) ` }}
                    className={cls.ParallaxBottom_img}
                    alt="parallax"
                    src={background}
                />
            </div>
            <div className={cls.static}>
                <img className={cls.static_img} src={background} alt="background" />
            </div>
        </>
    );
};

export default ParallaxBottom;