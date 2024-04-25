import React from 'react'
import cls from './RenderMenu.module.scss'

export const RenderMenu = ({ category }) => {
    return (
      <div className="">
        <h3 className={cls.Render_category_title}>{category.title}</h3>
        {category.items && category.items.map((e, i) => (
          <div key={i} className="">
            <div className={cls.Render_category_subtitle}>
              <span>{e.title}</span>
            </div>
            <div className={cls.Render_item_container}>
              {e.items.map((elem, index) => (
                <div className={cls.Render_item} key={index}>
                  <div className="">
                    <h5 className={cls.Render_item_title}>{elem.name}</h5>
                    <hr />
                    <span className={cls.Render_item_text}>{elem.taste}</span>
                    <span className={cls.Render_item_text}>{elem.country}</span>
                  </div>
                  <div className="">
                    <p className={cls.Render_item_price}>{elem.volume}</p>
                    <hr />
                    <p className={cls.Render_item_price}>{elem.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  