import React, { useEffect, useState } from "react";
import cls from "./MenuPage.module.scss";
import WindowImg from "./../../components/WindowImg/WindowImg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataBar,
  selectBarData,
} from "./../../redux/Slice/SliceBar/SliceBar";
const items = [
  {
    title: "white wine",
    items: [
      {
        title: "citrus",
        items: [
          {
            name: "Турень Совиньон Валле де Рэн",
            taste: "сухое",
            country: "Франция",
            volume: "750мл",
            price: "3800р",
          },
          {
            name: "Гави Миньянего",
            taste: "сухое",
            country: "Италия",
            volume: "750мл",
            price: "3700р",
          },
        ],
      },
    ],
  },
];

export const RenderMenu = ({ category }) => {
  return (
    <div className="">
      <h3 className={cls.Render_category_title}>{category.title}</h3>
      {category.items.map((e, i) => (
        <div key={i} className="">
          <h4  className={cls.Render_category_subtitle}>{e.title}</h4>
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

export const MenuPage = () => {
  const dispatch = useDispatch();

  const [tab, setTab] = useState(0);

  useEffect(() => {
    dispatch(fetchDataBar());
    console.log(data, status);
  }, []);

  const { data, status } = useSelector(selectBarData);

  const loading = status === "loading";

  const tabList = data.map((item, index) => ({
    title: item.title,
    index: index,
  }));

  const renderMenu = (arayItems, indexTab) => {
    return <RenderMenu category={arayItems[indexTab]} />;
  };

  return (
    <div className={cls.MenuPage}>
      <WindowImg />
      <div className="content">
        <div className={cls.MenuPage_tabList}>
          {!loading &&
            tabList.map((item) => (
              <p onClick={() => setTab(item.index)} key={item.title}>
                {item.title}
              </p>
            ))}
        </div>
        {!loading && renderMenu(data, tab)}
      </div>
    </div>
  );
};
