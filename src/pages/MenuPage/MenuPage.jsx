import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDataBar,
  fetchDataKitchen,
  selectBarData,
} from "./../../redux/Slice/SliceBar/SliceBar";
import { RenderMenu } from "../../components/RenderMenu";
import { MenuFirstScreen } from "../../components/MenuFirstScreen";
import { useLocation } from "react-router-dom";
import { Loader } from "../../ui/Loader";
import SliderMenu from "../../components/SliderMenu";



export const MenuPage = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const { pathname } = useLocation()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const { bar, kitchen, status } = useSelector(selectBarData);



  useEffect(() => {
    if (pathname.includes('kitchen')) {
      dispatch(fetchDataKitchen());
    } else {
      dispatch(fetchDataBar());
    }
  }, [pathname]);



  useEffect(() => {
    const isLoading = status === "success"
    setLoading(() => isLoading)
    setTab(() => 0)
    if (pathname.includes('kitchen')) {
      setData(kitchen)
    } else {
      setData(bar)
    }

  }, [status, pathname]);



  const tabList = useMemo(() => {
    return data?.map((item, index) => ({
      title: item.title,
      index: index,
    }))
  }, [data])


  const renderMenu = (arayItems, indexTab) => {
    return <RenderMenu category={arayItems[indexTab]} />;
  };
  return (
    <div>
      {loading
        ? <>
          <MenuFirstScreen loading={!loading} tabList={tabList} tab={tab} setTab={setTab} />
          <SliderMenu tab={tab} setTab={setTab} slidesList={tabList} />
          {renderMenu(data, tab)}

        </>
        : <Loader />
      }
    </div>
  );
};
