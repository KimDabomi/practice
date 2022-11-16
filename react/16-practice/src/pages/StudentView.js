import React,{memo,useEffect,useMemo,useCallback} from 'react';
import {NavLink,useParams,useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {getCurrentData,getItem,deleteItem} from '../slices/StudentSlice';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';

const StudentView = memo(() => {
  // path 파라미터 받기
  const {id} = useParams();

  // 리덕스 관련 초기화
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.StudentSlice);

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

  const onStudentItemDelete = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const {id,name} = current.dataset;

    if (window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
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
                  <th>학번</th>
                  <td>{item.id}</td>
                </tr>
                <tr>
                  <th>학생이름</th>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <th>학생아이디</th>
                  <td>{item.userid}</td>
                </tr>
                <tr>
                  <th>학년</th>
                  <td>{item.grade}</td>
                </tr>
                <tr>
                  <th>주민번호</th>
                  <td>{item.idnum.substring(0,6)+'-'+item.idnum.substring(7,13)}</td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>{item.birthdate.substring(0,10)}</td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td>{item.tel}</td>
                </tr>
                <tr>
                  <th>키</th>
                  <td>{item.height}</td>
                </tr>
                <tr>
                  <th>몸무게</th>
                  <td>{item.weight}</td>
                </tr>
                <tr>
                  <th>학과번호</th>
                  <td>{item.deptno}</td>
                </tr>
                <tr>
                  <th>담당교수번호</th>
                  <td>{item.profno}</td>
                </tr>
              </tbody>
            </Table>

            <div style={{textAlign:'center'}}>
              <NavLink to='/'>목록</NavLink>&nbsp;|&nbsp;
              <NavLink to='/student_add'>등록</NavLink>&nbsp;|&nbsp;
              <NavLink to={`/student_edit/${item.id}`}>수정</NavLink>&nbsp;|&nbsp;
              <NavLink to='#!' data-id={item.id} data-name={item.name} onClick={onStudentItemDelete}>삭제</NavLink>
            </div>
          </div>
        )
      )}
    </div>
  );
});

export default StudentView;