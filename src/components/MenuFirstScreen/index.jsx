import cls from "./firstScreen.module.scss";


import { classNames } from './../../helpers/classnames';
import WindowImg from "../WindowImg/WindowImg";
import bg from '../../img/menuBg.jpg'



export const MenuFirstScreen = ({ loading, tabList, tab, setTab }) => {


    return (
        <div className={cls.MenuFirstScreen}>
            <div className={cls.MenuFirstScreen_bg}>
                <WindowImg img={bg} />
            </div>
            <div className="content">
                <div className={cls.MenuFirstScreen_container}>
                    <div></div>
                    <div className={cls.Tabllist}>
                        {!loading &&
                            tabList.map((item) => (
                                <p
                                    className={classNames(cls.Tablist_item, { [cls.Tablist_item_active]: item.index === tab })}
                                    onClick={() => setTab(item.index)}
                                    key={item.title}

                                >
                                    {item.title}
                                </p>
                            ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
