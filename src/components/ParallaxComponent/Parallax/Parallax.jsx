import cls from './Parallax.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const Parallax = ({ background }) => {


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

export default Parallax;