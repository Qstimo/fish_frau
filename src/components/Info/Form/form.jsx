import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cls from './form.module.scss'
import { Button } from '../../../ui/Button';
import { useDispatch } from 'react-redux';
import { fetchModalreservation } from '../../../redux/Slice/SliceModalReservation/SliceModalReservation';




export const FormList = ({ initialValues, initialValuesList, title }) => {
    const [send, setSend] = useState(null)
    const dispatch =useDispatch()


    if (send) {
        return <div className={cls.send_container}>
            <h3>Успешно отправленно!</h3>
        </div>
    }
    return <div className={cls.Form}>
        <Formik
            initialValues={initialValues}
            validate={values => {
                const errors = {};

                if (!values.guests || values.guests < 1) {
                    errors.guests = 'Пожалуйста, заполните поле';
                }

                if (!values.date) {
                    errors.date = 'Пожалуйста, заполните дату';
                } else if (new Date(values.date) < new Date()) {
                    errors.date = 'Дата не может быть раньше текущей';
                }

                if (!values.time) {
                    errors.time = 'Пожалуйста, заполните время';
                } else if (new Date().setHours(0, 0, 0, 0) > new Date(values.time).setHours(0, 0, 0, 0)) {
                    errors.time = 'Время не может быть раньше текущего';
                }

                if (!values.phone || !/^\+?[0-9]{7,15}$/.test(values.phone)) {
                    errors.phone = 'Не корректный номер телефона';
                }

                if (!values.name) {
                    errors.name = 'Пожалуйста, введите ваше имя';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    dispatch(fetchModalreservation(values))
                    setSubmitting(false);
                    setSend(true)
                }, 400);
            }}
        >

            {({ isSubmitting }) => (
                <Form className={cls.Form_list_container}>
                    <h3>{title}</h3>
                    <div className={cls.Form_list}>
                        {Object.entries(initialValuesList).map(([key, { placeholder, title }]) => (
                            <div key={key} className={cls.Form_list_field}>
                                <p>{title}</p>
                                <Field className={cls.Form_list_input} value={initialValues.key} placeholder={placeholder} type={key} name={key} />
                                <ErrorMessage className={cls.Form_list_field_erorr} name={key} component="div" />
                            </div>))
                        }
                    </div>
                    <Button type="submit" disabled={isSubmitting}>
                        Отправить
                    </Button>
                </Form>
            )}
        </Formik>
    </div>
};

