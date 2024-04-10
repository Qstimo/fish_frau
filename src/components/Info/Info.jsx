import cls from './Info.module.scss'
import logo from '../../img/logo.jpg'
import decor from '../../img/img_2.jpg'



export const Info = () => {
    return (
        <div className={cls.Info_box}>
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
                <div className={cls.Info_reservation}>
                    <h3 className={cls.Info_reservation_item}>ЗАБРОНИРОВАТЬ СТОЛИК</h3>
                </div>
            </div>
            <div className={cls.img}>
                <img className={cls.img_item} src={decor} alt="decor" />
            </div>
        </div>
    )
}