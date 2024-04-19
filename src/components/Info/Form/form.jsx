// import cls from './Form.module.scss'
// import { Button } from '../../../UI/Button'
// import { ButtonTheme } from '../../../UI/Button/ui/Button'
// import { useModal } from '../../../app/providers/ModalContext'
// import axios from 'axios'
// import { useInput, useValidForm } from '../../../helpers/useValidator'
// import { classNames } from '../../../helpers/classnames'
// import { Input } from '../../../ui/Input'
// import iconFalse from './icon/false_ic.svg'
// import iconTrue from './icon/true_ic.svg'

// export const FormList = ({ setLoading }) => {
//     const API_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:4444';
//     const name = useInput('', { isEmpty: true, minLength: 3, });
//     const phone = useInput('', { isEmpty: true, isPhone: true, minLength: 8, });
//     const email = useInput('', { isEmpty: true, IsEmail: true, });
//     const valid = useValidForm([...email.errorsArray, ...phone.errorsArray, ...name.errorsArray]);

//     const { toggleModal } = useModal();
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // setLoading(true);
//         try {
//             const { data } = await axios.post(`${API_URL}/send-email`, {
//                 name: name.value,
//                 email: email.value,
//                 phone: phone.value
//             })
//             name.setValue('');
//             email.setValue('');
//             phone.setValue('');
//             setLoading(false)
//             toggleModal()
//         } catch (error) {
//             console.warn(error);
//         } finally {
//             setLoading(false)
//         }


//     };

//     return (
//         <div className={cls.FormList}>
//             <div className="content">
//                 <div className={cls.FormList_container}>
//                     <button className={cls.FormList_close} onClick={toggleModal}> <span></span></button>
//                     <div className={cls.FormList_container_title}>
//                         <h3>Запишитесь<br></br> на приём онлайн</h3>
//                         <p>Администратор свяжется с вами через WhatsApp в течение дня и уточнит детали</p>
//                     </div>
//                     <form onSubmit={handleSubmit} method='POST' action='' encType="multipart/form-data" className={cls.Form_list_register}>

//                         <label className={cls.Form_list_register_label} htmlFor="name">
//                             <Input
//                                 value={name.value}
//                                 onBlur={e => name.onBlur(e)}
//                                 onChange={e => name.onChange(e)}
//                                 required={true}
//                                 name='name'
//                                 id='name'
//                                 type='text'
//                                 placeholder='ФИО' />
//                             {name.isDirty && (name.stringErorr.length >= 1
//                                 ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
//                                 : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
//                         </label>
//                         <label className={cls.Form_list_register_label} htmlFor="phone">
//                             <Input
//                                 value={phone.value}
//                                 onBlur={e => phone.onBlur(e)}
//                                 onChange={e => phone.onChange(e)}
//                                 required={true}
//                                 name='phone'
//                                 id='phone'
//                                 type='text'
//                                 placeholder='Номер телефона' />
//                             {phone.isDirty && (phone.stringErorr.length >= 1
//                                 ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
//                                 : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
//                         </label>
//                         <label className={cls.Form_list_register_label} htmlFor="email">
//                             <Input
//                                 value={email.value}
//                                 onBlur={e => email.onBlur(e)}
//                                 onChange={e => email.onChange(e)}
//                                 required={true}
//                                 name='email'
//                                 id='phone'
//                                 type='mail'
//                                 placeholder='Электронная почта' />
//                             {email.isDirty && (email.stringErorr.length >= 1
//                                 ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
//                                 : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
//                         </label>

//                         <Button disabled={!valid} className={cls.Form_btn} theme={ButtonTheme.GREEN}>Записаться</Button>
//                     </form>
//                 </div>
//             </div >
//         </div >
//     )
// }