import React,{memo,useCallback} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import {getList,deleteItem} from '../slices/StudentSlice';
import styled from 'styled-components';
import {useQueryString} from '../hooks/useQueryString';

// 입력 컨트롤들을 포함하는 박스
const ControlContainer = styled.form`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  
  .control {
    margin-right: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
  }
  .clickable {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #06f2;
    }
    &:active {
      transform: scale(.9,.9);
    }
  }
`;
const StudentList = memo(() => {
  // QueryString 변수 받기
  const {keyword} = useQueryString();

  // 리덕스 관련 초기화
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.StudentSlice);

  // 최초 마운트 시 리덕스를 통해 목록을 조회한다.
  React.useEffect(() => {
    dispatch(getList({
      keyword: keyword
    }));
  },[keyword]);

  // 페이지 강제 이동을 처리하기 위한 navigate함수 생성
  const navigate = useNavigate();

  // 검색 이벤트
  const onSearchSubmit = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const keyword = current.keyword;

    navigate(`/?keyword=${keyword.value}`);
  },[navigate]);

  // 삭제 버튼에 대한 이벤트 리스너
  const onStudentItemDelete = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const {id,name} = current.dataset;

    if (window.confirm(`정말 ${name}(을)를 삭제하시겠습니까?`)) {
      dispatch(deleteItem({
        id: id
      }));
    }
  },[]);

  // 수정 버튼에 대한 이벤트 리스너
  const onStudentEditClick = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const {id} = current.dataset;

    navigate(`/student_edit/${id}`);
  });

  return (
    <div>
      <Spinner loading={loading} />

      {/* 검색폼 */}
      <ControlContainer onSubmit={onSearchSubmit}>
        <input type='text' name='keyword' className='control' />
        <button type='submit' className='control clickable'>검색</button>
        <NavLink to='/student_add' className='control clickable'>학생정보 추가하기</NavLink>
      </ControlContainer>

      {/* 조회결과 표시하기 */}
      {error ? (
        <ErrorView error={error} />
      ) : (
        // ajax 처리 결과가 존재할 경우
        data && (
          <Table>
            <thead>
              <tr>
                <th>학번</th>
                <th>학생이름</th>
                <th>학생아이디</th>
                <th>학년</th>
                <th>주민번호</th>
                <th>생년월일</th>
                <th>전화번호</th>
                <th>키</th>
                <th>몸무게</th>
                <th>학과번호</th>
                <th>담당교수번호</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {
                // 처리결과는 존재하지만 데이터 수가 0건인 경우와 그렇지 않은 경우를 구분
                data.length > 0 ? (
                  data.map((v,i) => {
                    return (
                      <tr key={v.id}>
                        <td>{v.id}</td>
                        <td>
                          <NavLink to={`/student_view/${v.id}`}>{v.name}</NavLink>
                        </td>
                        <td>{v.userid}</td>
                        <td>{v.grade}</td>
                        <td>{v.idnum.substring(0,6)+'-'+v.idnum.substring(7,13)}</td>
                        <td>{v.birthdate.substring(0,10)}</td>
                        <td>{v.tel}</td>
                        <td>{v.height}</td>
                        <td>{v.weight}</td>
                        <td>{v.deptno}</td>
                        <td>{v.profno}</td>
                        <td>
                          <button type='button' data-id={v.id} onClick={onStudentEditClick}>수정하기</button>
                        </td>
                        <td>
                          <button type='button' data-id={v.id} data-name={v.name} onClick={onStudentItemDelete}>삭제하기</button>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan='5' align='center'>
                      검색 결과가 없습니다.
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        )
      )}
    </div>
  );
});

export default StudentList;