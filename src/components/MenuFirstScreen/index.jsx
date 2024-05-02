import cls from "./firstScreen.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";


// <Element name="section1" className="element">
//   Содержимое раздела 1
// </Element>

import { classNames } from './../../helpers/classnames';
import WindowImg from "../WindowImg/WindowImg";
import bg from '../../img/top-view-cocktail-essentials-with-lime-copy-space (1).webp'
import bgMenu from '../../img/photoeditorsdk-export (1).webp'
import { useLocation } from "react-router-dom";



export const MenuFirstScreen = ({ loading, tabList, tab, setTab }) => {

    const { pathname } = useLocation();
    return (
        <div className={cls.MenuFirstScreen}>
            <div className={cls.MenuFirstScreen_bg}>
                {
                    pathname === '/menu/bar' ? <WindowImg img={bg} adaptiv={bg} /> : <WindowImg img={bgMenu} adaptiv={bgMenu}/>
                }
            </div>
            <div className="content">
                <div className={cls.MenuFirstScreen_container}>
                    <div>

                    </div>
                    <div className={cls.Tabllist}>
                        {!loading &&
                            tabList.map((item) => (
                                <Link
                                    to="menuList" smooth={true} duration={500}
                                    onClick={() => setTab(() => item.index)}
                                    key={item.title}
                                >
                                    <span className={classNames(cls.Tablist_item, { [cls.Tablist_item_active]: item.index === tab })}>
                                        {item.title}
                                    </span>
                                </Link>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
