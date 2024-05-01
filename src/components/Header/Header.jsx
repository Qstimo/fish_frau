import React, { useEffect, useState } from 'react'
import cls from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom'
import Logo from './logo'
import { classNames } from '../../helpers/classnames'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { LinksHeader } from '../../config'





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

    const scrollToLink = () => {
        setOpen(() => false)
        scrollTo()
    }
    const isMenu = pathname.includes('menu')

    useEffect(() => {

    }, [pathname])

    const mods = {
        [cls.scroll]: isScrolled,
        [cls.menu]: isMenu,
    };

    return (
        <div className={classNames(cls.Header, mods, [])} >
            <div className="content">
                <div className={cls.Header_container}>
                    <Link onClick={scrollTo} className={classNames(cls.Header_logo, { [cls.scroll_logo]: isScrolled }, [])} to={'/'}>
                        <Logo className={classNames(cls.Logo, { [cls.scroll_logo]: isScrolled }, [])} />
                    </Link>
                    <button onClick={toglleNavbar} className={classNames(cls.BtnClose, { [cls._active_btn]: open }, [])}>
                        <span></span>
                    </button>
                    <div className={classNames(cls.Navbar, { [cls._active_nav]: open }, [])}>
                        <ul >
                            {LinksHeader.map(link => {
                                if (link.links) {
                                    return (
                                        link.links.map((item) =>
                                            <Link onClick={scrollToLink} key={item.name} to={item.link}>
                                                <li className={classNames('', { [cls.activeLink]: pathname.includes(item.link) }, [])}>{item.name}</li>
                                            </Link>)
                                    )
                                }
                                return (!isMenu &&
                                    <ScrollLink key={link.link} to={link.link} onClick={() => setOpen(false)} smooth={true} duration={500}>
                                        <li>
                                            {link.name}
                                        </li>
                                    </ScrollLink>)

                            }
                            )}
                            {isMenu &&
                                <Link onClick={scrollToLink} to={"/"}>
                                    <li>На главную</li>
                                </Link>}
                        </ul>
                    </div>

                </div>
            </div>
        </div >
    )
}