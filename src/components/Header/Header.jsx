import React, { useEffect, useState } from 'react'
import cls from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import Logo from './logo'
import { classNames } from '../../helpers/classnames'




const LinksHeader = [
    { name: 'БЛЮДА ОТ ШЕФА', link: '/chef' },
    { name: 'МЕНЮ', link: '/menu/bar' },
    { name: 'БРОНЬ', link: '/br' },
    { name: 'ПРЕИМУЩЕСТВА', link: '/value' },
]
export const Header = () => {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 30)
    }

    const toglleNavbar = () => {
        setOpen(prev => !prev)
    }

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    const mods = {
        [cls.scroll]: isScrolled, 
        [cls.menu]: pathname.includes('menu') 
        };

    return (
        <div className={classNames(cls.Header, mods , [])} >
            <div className="content">
                <div className={cls.Header_container}>
                    <Link onClick={scrollTo} className={cls.Header_logo} to={'/'}>
                        <Logo />
                    </Link>
                    <button onClick={toglleNavbar} className={classNames(cls.BtnClose, { [cls._active_btn]: open }, [])}>
                        <span></span>
                    </button>
                    <div className={classNames(cls.Navbar, { [cls._active_nav]: open }, [])}>
                        <ul >
                            {LinksHeader.map(link =>
                            (<Link key={link.name} to={link.link}>
                                <li  className={classNames('', {[cls.activeLink]: pathname.includes(link.link)}, [])}>{link.name}</li>
                            </Link>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}