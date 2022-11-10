import React,{memo,useEffect} from 'react';
import Spinner from '../components/Spinner';
import NewsList from '../components/NewsList';
import ErrorView from '../components/ErrorView';
import { useSelector,useDispatch } from 'react-redux';
import {getList} from '../slices/NewsSlice';

const News = memo(() => {
    // hook을 통해 slice가 관리하는 상태값 가져오기
    const {data,loading,error} = useSelector((state) => state.NewsSlice);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치함
    useEffect(() => {
        dispatch(getList());
    },[dispatch]);

    return (
        <div>
            <Spinner loading={loading} />
            {error ? (
                <ErrorView error={error} />
            ) : (
                data && (<NewsList news={data} />)
            )}
        </div>
    );
});

export default News;