import cls from './Info.module.scss'
import logo from '../../img/logo.jpg'
import decor from '../../img/img_2.jpg'
import { useState } from 'react'
import { Modal } from '../../ui/Modal'
import { FormList } from './Form/form'
import {  motion } from 'framer-motion'



export const Info = () => {
    const [open, setOpen] = useState(false)

    const toglleModal = () => {
        setOpen(prev => !prev)
        if (!open) {
            document.body.classList.add('modal-show');
        }
        if (open) {
            document.body.classList.remove('modal-show');
        }
    }




    return (
        <motion.div
            className={cls.Info_box}
            initial={{ opacity: 0, y:200 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={cls.Info}>
                <img className={cls.Info_logo} src={logo} alt="logo" />
                <p className={cls.Info_separation}>* * *</p>
                <p className={cls.Info_text}>Ресторан "Рыба" - одно из немногих мест в Ростове,
                    где можно вкусить все прелести рыбной кухни как местного,
                    донского направления, так и привозимых из зарубежья морепродуктов.
                    В меню есть более 60 видов рыбных блюд, а для тех, кто все-таки
                    хочет отведать мяса - достаточно большой выбор мясных блюд на
                    гриле и мангале. </p>
                <p className={cls.Info_text}>Летом меню расширяется роллами, легкими
                    салатами, коктейлями. Интерьер заведения
                    исполнен в средиземноморском стиле. </p>
                <p className={cls.Info_text}>В пятницу и субботу по вечерам атмосферу побережья
                    создают расслабляющий чил-аут и лаунж
                    сеты от приглашенных диджеев.
                </p>
                <button onClick={toglleModal} className={cls.Info_reservation}>
                    ЗАБРОНИРОВАТЬ СТОЛИК
                </button>
                <Modal isOpen={open} onClose={toglleModal}>
                    {/* <FormList /> */}
                </Modal>
            </div>
            <div className={cls.img}>
                <img className={cls.img_item} src={decor} alt="decor" />
            </div>
        </motion.div>
    )
}