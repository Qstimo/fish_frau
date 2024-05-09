import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cls from './form.module.scss'
import { Button } from '../../../ui/Button';
import { useDispatch } from 'react-redux';
import { fetchModalreview } from '../../../redux/Slice/SliceModalReview/SliceModalReview';




export const FormList = ({ initialValues, initialValuesList, title }) => {
    const [send, setSend] = useState(null)
    const dispatch = useDispatch()

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
                if (!values.email) {
                    errors.email = 'Пожалуйста, введите ваше email';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Не правильный email';
                }
                if (!values.name) {
                    errors.name = 'Пожалуйста, введите ваше имя';
                }
                if (!values.textarea) {
                    errors.textarea = 'Пожалуйста, введите ваш отзыв';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    dispatch(fetchModalreview(values))
                    setSubmitting(false);
                    setSend(true)
                }, 400);
            }}
        >

            {({ isSubmitting }) => (
                <Form className={cls.Form_list_container}>
                    <h3>{title}</h3>
                    <div className={cls.Form_list}>
                        {Object.entries(initialValuesList).map(([key, { placeholder, title, styles, component }]) => (
                            <div key={key} className={cls.Form_list_field}>
                                <p>{title}</p>
                                <Field style={styles} className={cls.Form_list_input} component={component} value={initialValues.key} placeholder={placeholder} type={key} name={key} />
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

