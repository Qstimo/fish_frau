import React from 'react'
import cls from './input.module.scss'
import { classNames } from '../../helpers/classnames'


export const Input = (props) => {
    return (
        <input {...props} className={classNames(cls.Input, {}, [])}>
        </input>
    )
}