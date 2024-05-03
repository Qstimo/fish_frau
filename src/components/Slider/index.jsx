import React, { useState } from 'react'
import Swiper from './swiper/Swiper'
import SwiperRender from './swiper/Swiper'
import cls from './slider.module.scss'
import { Button } from '../../ui/Button'
import { Modal } from '../../ui/Modal'
import { initialReviewValues, initialValuesReviewList } from '../../config'
import { FormList } from './FormReview/formReview'
const slidesList = [
    "Ваша кухня как раз мне по вкусу - люблю морепродукты во всех видах",
    "Летом вернется. Ждем предложения на день семьи, любви и верности.",
    "Очень любим у вас проводить мероприятия! Спасибо за уютную обстановку и профессионализм",
    "Спасибо, на днях снова посетим ваш ресторан!",
    "Очень хочу еще раз к вам на ужин"
]

function Slider() {
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
        <div className={cls.Slider}>
            <div className='content'>
                <div className={cls.Slider_content}>
                    <div className={cls.Slider_title}>
                        <h3>Отзывы</h3>
                        <p>посетителей</p>
                    </div>
                    <SwiperRender slides={slidesList} />
                    <div onClick={toglleModal} className={cls.Slider_btn_container}>
                        <Button >Оставить отзыв</Button>
                    </div>
                </div>
            </div>
            <Modal isOpen={open} onClose={toglleModal}>
                <FormList initialValues={initialReviewValues} initialValuesList={initialValuesReviewList} title={"Есть вопросы? Напишите нам!"}/>
            </Modal>
        </div>
    )
}

export default Slider