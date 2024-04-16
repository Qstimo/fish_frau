import React from 'react'
import Swiper from './swiper/Swiper'
import SwiperRender from './swiper/Swiper'
import cls from './slider.module.scss'
import { Button } from '../../ui/Button'
const slidesList = [
    "Ваша кухня как раз мне по вкусу - люблю морепродукты во всех видах",
    "Летом вернется. Ждем предложения на день семьи, любви и верности.",
    "Очень любим у вас проводить мероприятия! Спасибо за уютную обстановку и профессионализм",
    "Спасибо, на днях снова посетим ваш ресторан!",
    "У вас очень вкусно!!!! Особенно мидии запечённые. обязательно примем участие в розыгрыше в инстаграме!",
    "Очень хочу еще раз к вам на ужин"
]

function Slider() {
    return (
        <div className={cls.Slider}>
            <div className='content'>
                <div className={cls.Slider_content}>
                    <div className={cls.Slider_title}>
                        <h3>Отзывы</h3>
                        <p>посетителей</p>
                    </div>
                    <SwiperRender slides={slidesList} />
                    <div className={cls.Slider_btn_container}>
                        <Button>Оставить отзыв</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider