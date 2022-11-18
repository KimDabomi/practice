import React,{memo,useEffect,useMemo,useCallback} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import {getCurrentData,getItem,putItem} from '../slices/TrafficAccSlice';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import TableEx from '../components/Table';

const TrafficAccEdit = memo(() => {
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
      dispatch(getItem({id:id}));
    }
  },[data]);

  // 페이지 강제이동을 처리하기 위한 navigate함수 생성
  const navigate = useNavigate();

  // form의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러
  const onTrafficAccSubmit = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;

    // 리덕스를 통한 데이터 저장 요청
    dispatch(putItem({
      year: current.year.value,
      month: current.month.value,
      accident: current.accident.value,
      death: current.death.value,
      injury: current.injury.value
    })).then((result) => {
      console.log(result);
      navigate(`/traffic_acc_view/${result.payload.id}`);
    });
  },[]);

  return (
    <div>
      <Spinner loading={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <form onSubmit={onTrafficAccSubmit}>
          <input type='hidden' name='id' defaultValue={item?.id} />
          <TableEx>
            <colgroup>
              <col width='120' />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>발생년도</th>
                <td className='inputWrapper'>
                  <input className='field' type='number' name='year' defaultValue={item?.year} />
                </td>
              </tr>
              <tr>
                <th>발생월</th>
                <td className='inputWrapper'>
                  <input className='field' type='number' name='month' defaultValue={item?.month} />
                </td>
              </tr>
              <tr>
                <th>사고 건수</th>
                <td className='inputWrapper'>
                  <input className='field' type='number' name='accident' defaultValue={item?.accident} />
                </td>
              </tr>
              <tr>
                <th>사망자 수</th>
                <td className='inputWrapper'>
                  <input className='field' type='number' name='death' defaultValue={item?.death} />
                </td>
              </tr>
              <tr>
                <th>사상자 수</th>
                <td className='inputWrapper'>
                  <input className='field' type='number' name='injury' defaultValue={item?.injury} />
                </td>
              </tr>
            </tbody>
          </TableEx>
          <div style={{textAlign:'center'}}>
            <button type='submit'>저장하기</button>
          </div>
        </form>
      )}
    </div>
  );
});

export default TrafficAccEdit;