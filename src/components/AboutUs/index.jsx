import React from 'react'
import cls from './aboutUs.module.scss'

const aboutUsList = [
    { title: 'более 40', text: "видов рыб" },
    { title: '10 000', text: "довольных клиентов" },
    { title: '15', text: "лет успешной работы" },
    { title: '500', text: "более 500 веселых корпоративов" }
]

const AboutUs = () => {
    return (
        <div>
            <div className="content">
                <div className={cls.AboutUs_content}>
                    {aboutUsList.map(list => (
                        <div className={cls.AboutUs_item}>
                            <h3>{list.title}</h3>
                            <p>{list.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs