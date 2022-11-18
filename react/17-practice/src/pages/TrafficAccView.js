import React,{memo,useEffect,useMemo,useCallback} from 'react';
import {NavLink,useParams,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {getCurrentData,getItem,deleteItem} from '../slices/TrafficAccSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

const TrafficAccView = memo(() => {
  // path 파라미터 받기
  const {id} = useParams();

  // 리덕스 관련 초기화
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.TrafficAccSlice);

  // 데이터 가져오기
  useEffect(() => {
    dispatch(getCurrentData());
  },[]);

  // data값의 변경에 따른 사이드 이펙트 처리
  const item = useMemo(() => {
    if (data) {
      return data.find((v,i) => v.id == id);
    } else {
      // 새로고침 시 현재 데이터만 다시 로드함
      dispatch(getItem({id:id}));
    }
  },[data]);

  // 페이지 강제 이동을 처리하기 위한 navigate 함수 생성
  const navigate = useNavigate();

  const onTrafficAccItemDelete = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const {id,year} = current.dataset;

    if (window.confirm(`정말 ${year}년의 정보를 삭제하시겠습니까?`)) {
      dispatch(deleteItem({
        id: id
      })).then(({meta,payload}) => {
        // 삭제 후 목록 페이지로 이동
        navigate('/');
      });
    }
  },[]);

  return (
    <div>
      <Spinner loading={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        item && (
          <div>
            <Table>
              <colgroup>
                <col width='120' />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>번호</th>
                  <td>{item.id}</td>
                </tr>
                <tr>
                  <th>발생년도</th>
                  <td>{item.year}년</td>
                </tr>
                <tr>
                  <th>발생월</th>
                  <td>{item.month}월</td>
                </tr>
                <tr>
                  <th>사고 건수</th>
                  <td>{item.accident}건</td>
                </tr>
                <tr>
                  <th>사망자 수</th>
                  <td>{item.death}명</td>
                </tr>
                <tr>
                  <th>사상자 수</th>
                  <td>{item.injury}명</td>
                </tr>
              </tbody>
            </Table>

            <div style={{textAlign:'center'}}>
              <NavLink to='/'>목록</NavLink>&nbsp;|&nbsp;
              <NavLink to='/traffic_acc_add'>등록</NavLink>&nbsp;|&nbsp;
              <NavLink to={`/traffic_acc_edit/${item.id}`}>수정</NavLink>&nbsp;|&nbsp;
              <NavLink to='#!' data-id={item.id} data-year={item.year} onClick={onTrafficAccItemDelete}>삭제</NavLink>
            </div>
          </div>
        )
      )}
    </div>
  );
});

export default TrafficAccView;