import cls from './FooterDooble.module.scss';

const footerList = {
    adres: { title: 'АДРЕС ЗАВЕДЕНИЯ', text: 'г. Ростов-на-Дону, Береговая, 29а', phone: '+7 (928) 279-28-88', email: '2918133@gmail.com' },
    workTime: { title: "ЧАСЫ РАБОТЫ", week: { days: 'ВС-ЧТ', time: "с 12:00 до 00:00" }, weekend: { days: 'ПТ-СБ', time: "с 12:00 до 02:00" } }
}



const FooterDooble = () => {
    return (
        <div className={cls.Footer}>
            <div className="content">
                <div className={cls.Footer_box}>
                    <div className={cls.adres}>
                        <p className={cls.adres_title}>{footerList.adres.title}</p>
                        <p className={cls.adres_item}>{footerList.adres.text}</p>
                        <p className={cls.adres_tel}>{footerList.adres.phone}</p>
                        <p className={cls.adres_email}>{footerList.adres.email}</p>
                    </div>
                    <div className={cls.time}>
                        <p className={cls.time_title}>{footerList.workTime.title}</p>
                        <div className={cls.time_box}>
                            <div className={cls.weekdays}>
                                <p className={cls.weekdays_days}>{footerList.workTime.week.days}</p>
                                <p className={cls.weekdays_item}>{footerList.workTime.week.time}</p>
                            </div>
                            <div className={cls.weekend} >
                                <p className={cls.weekend_days}>{footerList.workTime.weekend.days}</p>
                                <p className={cls.weekend_time}>{footerList.workTime.weekend.time}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FooterDooble;