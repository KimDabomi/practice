import React, { memo,useEffect } from "react";
import LineChartView from "../components/LineChartView";
import Spinner from "../components/Spinner";
import ErrorView from "../components/ErrorView";
import MenuLink from "../components/MenuLink";
import {getList} from "../slices/Covid19Slice";
import { useQueryString } from "../hooks/useQueryString";
import { useSelector,useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Covid19 = memo(() => {
  const {gte,lte} = useQueryString();
  const {search,pathname} = useLocation();
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.Covid19Slice);
  const menu = pathname.slice(9);
  console.log(menu);

  useEffect(() => {
    dispatch(
      getList({
        gte: gte,
        lte: lte
      })
    );
  },[gte,lte]);

  return (
    <div>
      <MenuLink to={`/covid19/confirmed${search}`}>일일확진자</MenuLink>
      <MenuLink to={`/covid19/confirmed_acc${search}`}>누적확진자</MenuLink>
      <MenuLink to={`/covid19/active${search}`}>격리환자</MenuLink>
      <MenuLink to={`/covid19/released${search}`}>격리해제</MenuLink>
      <MenuLink to={`/covid19/released_acc${search}`}>누적격리해제</MenuLink>
      <MenuLink to={`/covid19/death${search}`}>사망자</MenuLink>
      <MenuLink to={`/covid19/death_acc${search}`}>누적사망자</MenuLink>

      <Spinner loading={loading} />

      {data && data.length === 0 ? (
        <h1>데이터가 없습니다.</h1>
      ) : error ? (
        <ErrorView error={error} />
      ) : (
        data && <LineChartView covid19={data} category={menu} />
      )}
    </div>
  );
});

export default Covid19;
