import React from 'react'
import cls from './MainPage.module.scss'
import { Info } from '../../components/Info/Info'
import WindowImg from '../../components/WindowImg/WindowImg'
import Chef from '../../components/ChefInfo/Chef'





export const MainPage = () => {
    return (
        <div className={cls.MainPage} >
            <WindowImg />
            <div className={cls.container}>
                <Info />
                <Chef/>
            </div>
            
        </div>
    )
}