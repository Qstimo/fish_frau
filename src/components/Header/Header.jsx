import React, { useEffect, useState } from 'react'
import cls from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

export const classNames = (cls, mods = {}, additional= []) => {
  return [
      cls,
      ...additional.filter(Boolean),
      ...Object.entries(mods)
          .filter(([key, value]) => Boolean(value))
          .map(([className]) => className)
  ].join(' ')
}

const LinksHeader = [
    { name: 'БЛЮДА ОТ ШЕФА', link: '/' },
    { name: 'МЕНЮ', link: '/' },
    { name: 'БРОНЬ', link: '/' },
    { name: 'ПРЕИМУЩЕСТВА', link: '/' },
]
export const Header = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = ()=>{
        setIsScrolled(window.scrollY > 30)
    }
    useEffect(()=>{
        handleScroll();
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])
    const toglleNavbar = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className={classNames(cls.Header, { [cls.scroll]: isScrolled }, [])} >
            <div className="content">
                <div className={cls.Header_container}>
                  <img width={'60px'} height={'40px'} src={logo}/>
                <button onClick={toglleNavbar} className={classNames(cls.BtnClose, { [cls._active_btn]: open }, [])}>
                        <span></span>
                    </button>
                    <div className={classNames(cls.Navbar, { [cls._active_nav]: open }, [])}>
                        <ul >
                            {LinksHeader.map(link =>
                            (<Link key={link.name} to={link.link}>
                                <li >{link.name}</li>
                            </Link>
                            ))}
                        </ul>
                    </div>
           
                </div>
            </div>
        </div >
    )
}