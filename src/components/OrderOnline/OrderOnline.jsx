import { Link } from 'react-router-dom';
import cls from './OrderOnline.module.scss';


const OrderOnline = () => {
    return (
        <div className={cls.OrderOnline}>
            <Link
                className={cls.OrderOnline_link}
                to='https://xn--e1ane2e.xn--80aaco5bemccfl7i.xn--p1ai'
                target="_blank"
            > Посмотреть фото блюд и сделать заказ</Link>
        </div>
    );
};

export default OrderOnline;