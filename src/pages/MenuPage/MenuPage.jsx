import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataBar,
  selectBarData,
} from "./../../redux/Slice/SliceBar/SliceBar";
import { RenderMenu } from "../../components/RenderMenu";
import { MenuFirstScreen } from "../../components/MenuFirstScreen";



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
    <div>
      <MenuFirstScreen loading={loading} tabList={tabList} tab={tab} setTab={setTab} />
      {!loading && renderMenu(data, tab)}
    </div>
  );
};
