import React,{memo,useCallback} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import Table from '../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import {getList,deleteItem} from '../slices/ProfessorSlice';
import styled from 'styled-components';
import {useQueryString} from '../hooks/useQueryString';
import dayjs from 'dayjs';

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
const ProfessorList = memo(() => {
  // QueryString 변수 받기
  const {keyword} = useQueryString();

  // 리덕스 관련 초기화
  const dispatch = useDispatch();
  const {data,loading,error} = useSelector((state) => state.ProfessorSlice);

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
  const onProfessorItemDelete = useCallback(e => {
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
  const onProfessorEditClick = useCallback(e => {
    e.preventDefault();

    const current = e.currentTarget;
    const {id} = current.dataset;

    navigate(`/professor_edit/${id}`);
  });

  return (
    <div>
      <Spinner loading={loading} />

      {/* 검색폼 */}
      <ControlContainer onSubmit={onSearchSubmit}>
        <input type='text' name='keyword' className='control' />
        <button type='submit' className='control clickable'>검색</button>
        <NavLink to='/professor_add' className='control clickable'>교수정보 추가하기</NavLink>
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
                <th>교수번호</th>
                <th>교수이름</th>
                <th>교수아이디</th>
                <th>직책</th>
                <th>급여</th>
                <th>고용일</th>
                <th>수수료</th>
                <th>학과번호</th>
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
                          <NavLink to={`/professor_view/${v.id}`}>{v.name}</NavLink>
                        </td>
                        <td>{v.userid}</td>
                        <td>{v.position}</td>
                        <td>{v.sal}</td>
                        <td>{v.hiredate}</td>
                        <td>{v.comm}</td>
                        <td>{v.deptno}</td>
                        <td>
                          <button type='button' data-id={v.id} onClick={onProfessorEditClick}>수정하기</button>
                        </td>
                        <td>
                          <button type='button' data-id={v.id} data-name={v.name} onClick={onProfessorItemDelete}>삭제하기</button>
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

export default ProfessorList;