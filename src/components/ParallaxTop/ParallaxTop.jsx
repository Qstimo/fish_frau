import cls from './ParallaxTop.module.scss';
import parallax from '../../img/b4.png'



const ParallaxTop = () => {
    return (
        <div className={cls.ParallaxTop}>
            <img className={cls.ParallaxTop_img} src={parallax} alt="parallax" />
        </div>
    );
};

export default ParallaxTop;