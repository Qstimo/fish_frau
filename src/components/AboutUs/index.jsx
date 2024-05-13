import React from 'react'
import cls from './aboutUs.module.scss'
import { easeIn, motion } from 'framer-motion'


const aboutUsList = [
    { title: 'более 40', text: "видов рыб" },
    { title: '10 000', text: "довольных клиентов" },
    { title: '15', text: "лет успешной работы" },
    { title: '500', text: "более 500 веселых корпоративов" }
]

const AboutUs = () => {

    const textAnimation = {
        hidden: {
            y: 200,
            opacity: 0
        },
        visible: (custom) => ({
            y: 0,
            opacity: 1,
            transition: { easeIn, delay: custom * 0.3 }
        }),
    }

    return (
        <div>
            <div className="content">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className={cls.AboutUs_content}>
                    {aboutUsList.map((list, i) => (
                        <motion.div
                            variants={textAnimation}
                            custom={i + 0.5}

                            key={i} className={cls.AboutUs_item}>
                            <h3>{list.title}</h3>
                            <p>{list.text}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default AboutUs