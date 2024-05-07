import cls from './PresentationMenuFragment.module.scss';
import { easeIn, motion } from 'framer-motion'

const PresentationMenuFragment = (props) => {
    const { img, title, id, description } = props

    const shouldSwap = (id === 2 || id === 3 || id === 6 || id === 7);


    const textAnimation = {
        hidden: {
            scale:0.5,
            opacity: 0,
        },
        visible: (custom) => ({
            scale:1,
            opacity: 1,
            transition: { easeIn, delay: custom * 0.3,duration: 0.4 }
        }),
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            variants={textAnimation}
            custom={0.3}
            className={cls.box}>
            <div className={cls.PresentationMenuFragment}>
                {
                    shouldSwap ? (
                        <>
                            <div className={cls.img}>
                                <span className={cls.img_bloc}></span>
                                <img className={cls.img_item} src={`${'http://localhost:3000'}${img}`} alt="img" />
                            </div>
                            <div className={cls.text}>
                                <h5 className={cls.text_title}>{title}</h5>
                                <p className={cls.text_description}>{description} </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={cls.text}>
                                <h5 className={cls.text_title}>{title}</h5>
                                <p className={cls.text_description}>{description} </p>
                            </div>
                            <div className={cls.img}>
                                <span className={cls.img_blocReverce}></span>
                                <img className={cls.img_item} src={`${'http://localhost:3000'}${img}`} alt="img" />
                            </div>
                        </>
                    )
                }
            </div >
            <div className={cls.PresentationMenuFragmentClone}>
                <>
                    <div className={cls.imgClone}>
                        <img className={cls.imgClone_item} src={`${'http://localhost:3000'}${img}`} alt="img" />
                    </div>
                    <div className={cls.textClone}>
                        <h5 className={cls.textClone_title}>{title}</h5>
                        <p className={cls.textClone_description}>{description} </p>
                    </div>
                </>
            </div >
        </motion.div>
    );
};

export default PresentationMenuFragment;