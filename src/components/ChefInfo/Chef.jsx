import cls from './Chef.module.scss'
import chef from '../../img/1__7_.zndkD (1) — копия.jpg'
import { easeIn, motion } from 'framer-motion'

const Chef = () => {

    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { easeIn, delay: custom * 0.3 ,duration: 0.6}
        }),
    }
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={textAnimation}
        custom={0.5}
        className={cls.Chef}>
            <div className={cls.Chef_box}>
                <div className={cls.Chef_dots}>* * *</div>
                <div className={cls.Chef_title}>
                    Дорогие друзья!<br />
                    Мы рады приветствовать вас в ресторане «Рыба»
                </div>
            </div>
            <div className={cls.info}>
                <div className={cls.img}>
                    <img className={cls.img_item} src={chef} alt="chef" />
                </div>
                <div className={cls.description}>
                    <p className={cls.description_text}>
                        Свою задачу я вижу в гармоничном совмещении свежих кулинарных
                        тенденций с традициями и вкусами, а потому определил бы направление
                        деятельности, как авторскую кухню. В свои блюда я включаю как можно
                        больше сезонных продуктов. Мы ценим новое, и поэтому совмещаем современные
                        тенденции приготовления с оригинальной рецептурой.
                    </p>
                    <p className={cls.description_text}>
                        Я уверен, что кухня для гостей должна быть источником
                        ярких эмоций и незабываемых впечатлений, поэтому мы уходим
                        от стереотипных вкусов, позволяя по-новому взглянуть на привычное,
                        благодаря самым необычным сочетаниям продуктов, которые способны
                        удивлять и дарить нестандартные ощущения.
                    </p>
                    <div className={cls.subtitle}>
                        <p className={cls.subtitle_text}>
                            Шеф-повар ресторана «Рыба»
                            Александр Журавлёв
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Chef;