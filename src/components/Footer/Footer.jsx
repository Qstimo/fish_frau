import React from 'react'
import cls from './Footer.module.scss'

const footerList = {
  adres: { title: 'АДРЕС ЗАВЕДЕНИЯ', text: 'г. Ростов-на-Дону, Береговая, 29а', phone: '+7 (928) 279-28-88', },
  workTime: { title: "ЧАСЫ РАБОТЫ", week: { days: 'ВС-ЧТ', time: "с 12:00 до 00:00" }, weekend: { days: 'ПТ-СБ', time: "с 12:00 до 02:00" }, },
  reservations: { title: 'Возможно ', link: 'бронирование столов.', text: 'Пишите, звоните.', phone: '+7 (928) 279-28-88', email: '2918133@gmail.com' }
}



export const Footer = () => {
  return (
    <div className={cls.Footer}>
      <div className="content">
        <div className={cls.Footer_content}>
          <div className={cls.Footer_content_item}>
            <h3>{footerList.adres.title}</h3>
            <div>
              <p>{footerList.adres.text}</p>
              <a className={cls.Footer_link} href={`tel:${footerList.adres.phone}`}>{footerList.adres.phone}</a>
            </div>
          </div>

          <div className={cls.Footer_content_item}>
            <h3>{footerList.workTime.title}</h3>
            <div className={cls.Footer_time_container} >
              <div className={cls.Footer_time_block}>
                <p>{footerList.workTime.week.days}:</p>
                <p>{footerList.workTime.week.time}</p>
              </div>

              <div className={cls.Footer_time_block}>
                <p>{footerList.workTime.weekend.days}:</p>
                <p>{footerList.workTime.weekend.time}</p>
              </div>
            </div>
          </div>

          <div className={cls.Footer_content_item}>
            <h3></h3>
            <div >
              <div className={cls.Footer_content_reservations_title}>
                <p>{footerList.reservations.title}</p>
                <a className={cls.Footer_link} href={``}>
                  {footerList.reservations.link}
                </a>
              </div>

              <p>{footerList.reservations.text}</p>
              <div className={cls.Footer_reservations_link}>
                <a className={cls.Footer_link} href={`tel:${footerList.reservations.phone}`}>
                  {footerList.reservations.phone}
                </a>

                <a className={cls.Footer_link} href={`mailto:${footerList.reservations.email}`}>
                  {footerList.reservations.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

