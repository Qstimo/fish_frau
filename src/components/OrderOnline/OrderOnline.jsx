import { Link } from 'react-router-dom';
import cls from './OrderOnline.module.scss';


const OrderOnline = () => {
    return (
        <div className={cls.OrderOnline}>
            <Link
                className={cls.OrderOnline_link}
                to='https://foodeon.com/venue/restoran-ryba-zwml?utm_source=restoran-ryba&utm_medium=short_url&utm_campaign=no_campaign&r=cTbZFEAAfSxX3o6zax7uW'
                target="_blank"
            > Посмотреть фото блюд и сделать заказ</Link>
        </div>
    );
};

export default OrderOnline;