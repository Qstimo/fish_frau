import cls from './WindowImg.module.scss';


const WindowImg = ({img,adaptiv}) => {
    return (
        <div className={cls.WindowImg} >
            <img loading='lazy' className={cls.WindowImg_img} src={img} alt='img' />
            <img loading='lazy' className={cls.WindowImg_avaptiv} src={adaptiv} alt='avaptiv'/>
        </div>
    );
};
export default WindowImg

