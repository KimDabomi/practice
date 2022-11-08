import React,{memo} from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import {useNavigate,useParams} from 'react-router-dom';
import Spinner from '../components/Spinner';
import Table from '../components/Table';

// Table 컴포넌트의 css를 확장한 컴포넌트
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;
  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }
    label {
      margin-left: 7px;
      margin-right: 10px;
      
      input {
        margin-right: 10px;
      }
    }
  }
`;


const ProfessorEdit = memo(() => {
  // path 파라미터로 전달된 일련번호
  const {id} = useParams();

  // 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성
  const navigate = useNavigate();

  // 학과번호 정보를 가져오기 위한 ajax 요청
  const [{data:dept}] = useAxios('/department/');

  // 수정할 대상을 백엔드로부터 로드한다. -> 자동실행 모드
  const [{data,loading,error},refetch] = useAxios(`/professor/${id}`);

  // form의 submit버튼이 눌러졌을 때 호출될 이벤트 핸들러
  const onSubmit = React.useCallback(e => {
    e.preventDefault();

    // 이벤트가 발생한 폼 객체
    const current = e.target;

    // 입력받은 값 취득하기
    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value;
    const comm = current.comm.value;
    const deptno = current.deptno.value;

    // 입력,수정,삭제 처리는 async-await를 사용해야 한다.
    (async() => {
      let json = null;

      try {
        const response = await refetch({
          method: 'PUT',
          data: {
            name: name,
            userid: userid,
            position: position,
            sal: sal,
            hiredate: hiredate,
            comm: comm,
            deptno: deptno
          }
        });
        json = response.data;
        console.group('수정된 데이터 확인');
        console.log(json);
        console.groupEnd();
      } catch (e) {
        console.error(e);
        window.alert(`[${e.response.status}] ${e.response.statusText}\n${e.message}`);
        return;
      }

      // 정상적으로 저장되어 응답을 받았다면 페이지 강제 이동
      if (json !== null) {
        window.alert('저장되었습니다.');
        navigate('/');
      }
    })();
  },[refetch,navigate]);

  return (
    <>
      <Spinner loading={loading} />

      {error ? (
        <div>
          <h1>{error.code} Error.</h1>
          <hr />
          <p>{error.message}</p>
        </div>
      ) : (
        data && (
          <form onSubmit={onSubmit}>
            <TableEx>
              <colgroup>
                <col width='120' />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td className='inputWrapper'><input className='field' type='text' name='name' /></td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td className='inputWrapper'><input className='field' type='text' name='userid' /></td>
                </tr>
                <tr>
                  <th>직책</th>
                  <td className='inputWrapper'>
                    <label><input type='radio' name='position' value='교수' />교수</label>
                    <label><input type='radio' name='position' value='부교수' />부교수</label>
                    <label><input type='radio' name='position' value='조교수' />조교수</label>
                    <label><input type='radio' name='position' value='전임강사' />전임강사</label>
                  </td>
                </tr>
                <tr>
                  <th>급여</th>
                  <td className='inputWrapper'>
                    <input className='field' type='number' name='sal' placeholder='숫자만 입력' />
                  </td>
                </tr>
                <tr>
                  <th>고용일</th>
                  <td className='inputWrapper'>
                    <input className='field' type='date' name='hiredate' />
                  </td>
                </tr>
                <tr>
                  <th>수수료</th>
                  <td className='inputWrapper'>
                    <input className='field' type='number' name='comm' placeholder='숫자만 입력' />
                  </td>
                </tr>
                <tr>
                  <th>학과번호</th>
                  <td className='inputWrapper'>
                    <select name='deptno' className='field'>
                      <option value="">--- 선택하세요 ---</option>
                      {dept && dept.map((v,i) => {
                        return (
                          <option key={i} value={v.id}>{v.id}</option>
                        );
                      })}
                    </select>
                  </td>
                </tr>
              </tbody>
            </TableEx>
            
            <div style={{textAlign:'center'}}>
              <button type='submit'>저장하기</button>
            </div>
          </form>
        )
      )} 
    </>
  );
});

export default ProfessorEdit;