import React from 'react'
import cls from './button.module.scss'

export const Button = ({ children }) => {
    return (
        <button className={cls.Button}>
            {children}
        </button>
    )
}

