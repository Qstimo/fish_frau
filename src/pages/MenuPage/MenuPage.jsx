import React, { useEffect, useState } from "react";
import cls from "./MenuPage.module.scss";
import WindowImg from "./../../components/WindowImg/WindowImg";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataBar,
  selectBarData,
} from "./../../redux/Slice/SliceBar/SliceBar";
import { color } from "framer-motion";
import { classNames } from './../../helpers/classnames';
import { RenderMenu } from "../../components/RenderMenu";
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
        <div className={cls.Tabllist}>
          {!loading &&
            tabList.map((item) => (
              <p
                className={classNames(cls.Tablist_item,{[cls.Tablist_item_active] : item.index === tab})}
                onClick={() => setTab(item.index)}
                key={item.title}
               
              >
                {item.title}
              </p>
            ))}
        </div>
        {!loading && renderMenu(data, tab)}
      </div>
    </div>
  );
};
