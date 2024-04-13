import React from 'react'
import cls from './Footer.module.scss'

const footerList = {
  adres: {title: 'АДРЕС ЗАВЕДЕНИЯ', text:'г. Ростов-на-Дону, Береговая, 29а', phone: '+7 (928) 279-28-88',},
  workTime: {title:"ЧАСЫ РАБОТЫ", week:{days:'ВС-ЧТ', time:"с 12:00 до 00:00"},weekend:{days:'ПТ-СБ', time:"с 12:00 до 02:00"}, },
  reservations:{title:'Возможно бронирование столов.', text:'Пишите, звоните.', phone:'+7 (928) 279-28-88', email:'2918133@gmail.com'}
}
 


export const  Footer=() =>{
  return (
    <div className={cls.Footer}>
      <div className="content">
        <div className={cls.Footer_content}>
        <div className="">
          <div className="">
            <h3>{footerList.adres.title}</h3>
          </div>
        </div>
        <div className=""></div>
        </div>
      </div>
    </div>
  )
}

