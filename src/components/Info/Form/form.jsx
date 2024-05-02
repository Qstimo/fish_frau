import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cls from './form.module.scss'
import { Button } from '../../../ui/Button';


const initialValuesList = {
    email: { value: "", placeholder: "primer@mial.ru", title: "Электронная почта (необязательно):" },
    date: { value: "", placeholder: "2024-05-10", title: "Дата:" },
    guests: { value: "", placeholder: "", title: "Количество гостей:" },
    name: { value: "", placeholder: "Иван Иванов", title: "Ваше имя:" },
    time: { value: "", placeholder: "", title: "Время:" },
    phone: { value: "", placeholder: "+7(999)000-00-00", title: "Телефон:" }
}
const initialValues = {
    email: "", guests: "", date: "", time: "", name: "", phone: ""
}
function transformObject(obj) {
    let transformedObj = {};
    for (let key in obj) {
        transformedObj[key] = obj[key].value;
    }
    return transformedObj;
}
export const FormList = () => (
    <div className={cls.Form}>
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
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >

            {({ isSubmitting }) => (
                <Form className={cls.Form_list_container}>
                    <h3>Забронировать стол</h3>
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
);

