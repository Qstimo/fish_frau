import cls from './Providing.module.scss';
import img1 from '../../img/best1.png'
import img2 from '../../img/best2.png'
import img3 from '../../img/best3.png'
import img4 from '../../img/best4.png'
import img5 from '../../img/best5.png'
import img6 from '../../img/best6.png'
import { easeIn, motion } from 'framer-motion'

const Providing = () => {

    const textAnimation = {
        hidden: {
            opacity: 0
        },
        visible: (custom) => ({
            opacity: 1,
            transition: { easeIn, delay: custom * 0.3 }
        }),
    }

    return (
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={textAnimation}
        custom={1}
        className={cls.Providing}>
            <div className={cls.box}>
                <div className={cls.advantages}>
                    <p className={cls.advantages_text}>ДЕТСКАЯ ИГРОВАЯ ЗОНА</p>
                    <img className={`${cls.advantages_img} ${cls.marginLeft}`} src={img1} alt="img1" />
                </div>
                <div className={cls.advantages}>
                    <p className={cls.advantages_text}>РЕДКИЕ ВИДЫ РЫБ</p>
                    <img className={`${cls.advantages_img} ${cls.marginLeft}`} src={img2} alt="img2" />
                </div>
                <div className={cls.advantages}>
                    <p className={cls.advantages_text}>ТЕПЛАЯ АТМОСФЕРА</p>
                    <img className={`${cls.advantages_img} ${cls.marginLeft}`} src={img3} alt="img3" />
                </div>
            </div>
            <div className={`${cls.box_reverse} ${cls.visible}`}>
                <div className={cls.advantages}>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img4} alt="img4" />
                    <p className={cls.advantages_text}>УДОБНОЕ РАСПОЛОЖЕНИЕ</p>
                </div>
                <div className={`${cls.advantages} ${cls.location}`}>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img5} alt="img5" />
                    <p className={cls.advantages_text}>УЮТНЫЙ ИНТЕРЬЕР</p>
                </div>
                <div className={`${cls.advantages} ${cls.location}`}>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img6} alt="img6" />
                    <p className={cls.advantages_text}>ИНДИВИДУАЛЬНЫЙ ПОДХОД</p>
                </div>
            </div>
            <div className={ `${cls.box_reverse} ${cls.hidden}`}>
                <div className={cls.advantages}>
                    <p className={cls.advantages_text}>УДОБНОЕ РАСПОЛОЖЕНИЕ</p>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img4} alt="img4" />
                </div>
                <div className={`${cls.advantages} ${cls.location}`}>
                    <p className={cls.advantages_text}>УЮТНЫЙ ИНТЕРЬЕР</p>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img5} alt="img5" />
                </div>
                <div className={`${cls.advantages} ${cls.location}`}>
                    <p className={cls.advantages_text}>ИНДИВИДУАЛЬНЫЙ ПОДХОД</p>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img6} alt="img6" />
                </div>
            </div>
        </motion.div>
    );
};

export default Providing;