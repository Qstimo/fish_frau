import { useState } from 'react';
import cls from './PresentationMenuFragment.module.scss';


const PresentationMenuFragment = (props) => {
    const { img, title, id, description } = props




    const shouldSwap = (id === 2 || id === 3 || id === 6 || id === 7);

    return (
        <div className={cls.PresentationMenuFragment}>
            {
                shouldSwap ? (
                    <>
                        <div className={cls.img}>
                            <span className={cls.img_bloc}></span>
                            <img className={cls.img_item} src={`${'http://localhost:3000'}${img}`} alt="img" />
                        </div>
                        <div className={cls.text}>
                            <h5 className={cls.text_title}>{title}</h5>
                            <p className={cls.text_description}>{description} </p>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={cls.text}>
                            <h5 className={cls.text_title}>{title}</h5>
                            <p className={cls.text_description}>{description} </p>
                        </div>
                        <div className={cls.img}>
                        <span className={cls.img_blocReverce}></span>
                            <img className={cls.img_item} src={`${'http://localhost:3000'}${img}`} alt="img" />
                        </div>
                    </>
                )
            }
        </div >
    );
};

export default PresentationMenuFragment;