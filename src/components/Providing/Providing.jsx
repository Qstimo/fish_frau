import cls from './Providing.module.scss';
import img1 from '../../img/best1.png'
import img2 from '../../img/best2.png'
import img3 from '../../img/best3.png'
import img4 from '../../img/best4.png'
import img5 from '../../img/best5.png'
import img6 from '../../img/best6.png'


const Providing = () => {
    return (
        <div className={cls.Providing}>
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
                    <p className={cls.advantages_text}>VIP-ЗОНА</p>
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
                    <p className={cls.advantages_text}>VIP-ЗОНА</p>
                    <img className={`${cls.advantages_img} ${cls.marginRight}`} src={img6} alt="img6" />
                </div>
            </div>
        </div>
    );
};

export default Providing;