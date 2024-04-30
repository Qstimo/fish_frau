import React from 'react'
import cls from './RenderMenu.module.scss'
import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

export const RenderMenu = ({ category }) => {
const  getPrice = (price) => {
  return new Intl.NumberFormat("ru-RU", {
      style: "currency",
      currency: "RUB",
      minimumFractionDigits: 0,
  }).format(price);
};

const {pathname} = useLocation();
const renderVolume = volume =>{
  return pathname.includes("bar") ? `${volume} мл ` : `${volume} гр `
}

  return (
   <Element name="menuList" className={cls.RenderMenu}>
     <div className="content">
      <h3 className={cls.Render_category_title}>{category.title}</h3>
      {category.items && category.items.map((e, i) => (
        <div key={i} className="">
          <div className={cls.Render_category_subtitle}>
           {e.title && <span>{e.title}</span>}
          </div>
          <div className={cls.Render_item_container}>
            {e.items.map((elem, index) => (
              <div key={index}>
                <div className="">
                  <h5 className={cls.Render_item_title}>{elem.name}</h5>
                  <hr />
                </div>
                <div className={cls.Render_item}>
                  <div>
                    <span className={cls.Render_item_text}>{elem.taste}</span>
                    <span className={cls.Render_item_text}>{elem.country}</span>
                  </div>
                  <div className={cls.Render_item_price}>
                    <p>{renderVolume(elem.volume)}</p>
                    /
                    <p>{getPrice(elem.price)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
   </Element>
  );
};
