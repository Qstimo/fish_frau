import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataBar,
  selectBarData,
} from "./../../redux/Slice/SliceBar/SliceBar";
import { RenderMenu } from "../../components/RenderMenu";
import { MenuFirstScreen } from "../../components/MenuFirstScreen";
import { useLocation } from "react-router-dom";
import { Loader } from "../../ui/Loader";



export const MenuPage = () => {
  const dispatch = useDispatch();

  const [tab, setTab] = useState(0);
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname.includes('kitchen')) {
      dispatch(fetchDataBar('kitchen'));
    } else {
      dispatch(fetchDataBar("bar"));
    }
  }, [pathname]);

  const { data, status } = useSelector(selectBarData);

  const loading = status === "loading";

  const tabList = data.map((item, index) => ({
    title: item.title,
    index: index,
  }));

  const renderMenu = (arayItems, indexTab) => {
    return <RenderMenu category={arayItems[indexTab]} />;
  };
  console.log(loading)
  return (
    <div>

      {!loading
        ? <>
          <MenuFirstScreen loading={loading} tabList={tabList} tab={tab} setTab={setTab} />
          {renderMenu(data, tab)}
          <MenuFirstScreen loading={loading} tabList={tabList} tab={tab} setTab={setTab} />
        </>
        : <Loader/>
      }
    </div>
  );
};
