import cls from './PresentationMenu.module.scss';
import { data } from '../../menu.jsx'
import PresentationMenuFragment from '../PresentationMenuFragment/PresentationMenuFragment.jsx';


const PresentationMenu = () => {

    return (
        <div className={cls.PresentationMenu}>
            <div className={cls.title}>
                <p className={cls.title_top}>Блюда</p>
                <h4 className={cls.title_bottom}>ОТ ШЕФА</h4>
            </div>
            {
                data.map((item, id) => (
                    <PresentationMenuFragment key={id} {...item} />
                ))
            }
        </div>
    );
};

export default PresentationMenu;