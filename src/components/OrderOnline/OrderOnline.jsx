import { Link } from 'react-router-dom';
import cls from './OrderOnline.module.scss';


const OrderOnline = () => {
    return (
        <div className={cls.OrderOnline}>
            {/* <div className={cls.OrderOnline_title}>Сделать заказ онлайн</div> */}
            <Link className={cls.OrderOnline_link} to=''> Посмотреть фото блюд и сделать заказ</Link>
        </div>
    );
};

export default OrderOnline;