import React,{memo,useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useLocation,useNavigate} from 'react-router-dom';

const Professor = memo(() => {
  // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [professor, setProfessor] = useState([]);
  // 수정할 항목에 대한 id값을 지정하기 위한 상태값
  const [updateId, setUpdateId] = React.useState(-1);

  // QueryString으로 전달되는 검색 키워드를 받는다.
  const {search} = useLocation();
  const query = new URLSearchParams(search);
  const {keyword} = Object.fromEntries(query);

  // 페이지 강제 이동을 위한 객체 생성
  const navigate = useNavigate();

  // 페이지가 처음 열렸을 때 실행할 hook
  useEffect(() => {
    (async () => {
      // ajax 로딩 시작을 알림
      setLoading(true);
      
      let json = null;
      
      try {
        const response = await axios.get("/professor/", {
          // 검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
          params: keyword ? {name: keyword} : null
        });
        json = response.data;
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패했습니다. \n${e.message}`);
        return;
      } finally {
        setLoading(loading => false);
      }
      // ajax의 요청 결과를 상태값에 반영한다. -> 함수형 업데이트
      setProfessor(professor => json);
    })();
  },[keyword]);

  // 검색폼에서의 전송이벤트 - 성능 최적화를 위해 useCallback 적용
  const onSearchSubmit = useCallback(e => {
    e.preventDefault();
    console.log('submit!');
    // 검색어를 QueryString으로 지정하여 페이지로 이동 (여기서 keyword는 form의 name속성으로 불러온 input)
    navigate(`/professor?keyword=${e.currentTarget.keyword.value}`)
  },[navigate]);

  // 데이터 추가 submit 이벤트
  const onDataAddSubmit = useCallback(e => {
    e.preventDefault();

    // 이벤트가 발생한 폼 자신
    const form = e.currentTarget;
    
    // 폼 안의 input태그에 name속성으로 접근하여 입력값 취득
    const name = form.name.value;
    const userid = form.userid.value;
    const position = form.position.value;
    const sal = form.sal.value;
    const hiredate = form.hiredate.value.substring(0,10);
    const comm = form.comm.value;
    const deptno = form.deptno.value;

    (async () => {
      setLoading(loading => true);
      let json = null;

      try {
        const response = await axios.post("/professor/", {
          // 입력값을 post 파라미터로 전달
          name: name,
          userid: userid,
          position: position,
          sal: sal,
          hiredate: hiredate,
          comm: comm,
          deptno: deptno
        });
        json = response.data;

        console.group('데이터 저장 결과');
        console.log(json);
        console.groupEnd();
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패했습니다. \n${e.message}`);
        return;
      } finally {
        setLoading(loading => false);
      }

      setProfessor(professor => professor.concat(json));
      form.reset();
    })();
  },[]);

  // 데이터 삭제 버튼 click 이벤트
  const onDataDeleteClick = useCallback(e => {
    // 클릭된 자기 자신
    const current = e.currentTarget;
    // 클릭된 자신에게 숨어있는 data-id값을 추출
    const id = parseInt(current.dataset.id);
    console.log(`삭제 대상의 id값: ${id}`);

    // 삭제 요청을 위한 ajax 처리
    (async () => {
      setLoading(loading => true);

      try {
        // 삭제의 경우 ajax의 응답결과가 필요없다.
        await axios.delete(`/professor/${id}`);
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패했습니다. \n${e.message}`);
        return;
      } finally {
        setLoading(loading => false);
      }
      // ajax 삭제처리가 완료되면 프론트엔드가 가지고 있던 복사본(department 상태값)에서도 동일한 항목을 찾아야한다.
      setProfessor(professor => {
        const dropId = professor.findIndex((v,i) => {
          return v.id === id;
        });
        console.log(`제거할 대상의 배열 인덱스: ${dropId}`);
        
        // 상태값이 배열이므로 인덱스 번호가 dropId인 위치에서 1개의 데이터 삭제
        professor.splice(dropId,1);

        // 제거 결과를 리턴
        return professor;
      });
    })();
    setUpdateId(-1);
  },[]);

  // 데이터 수정 버튼 click 이벤트
  const onDataEditClick = useCallback(e => {
    e.preventDefault();

    // 수정할 항목에 대한 인덱스 번호를 상태값으로 설정한다.
    const current = e.currentTarget;
    const id = parseInt(current.dataset.id);
    setUpdateId(id);
  },[]);
  

  // 데이터 수정사항 저장 버튼 click 이벤트
  const onDataEditSubmit = useCallback(e => {
    e.preventDefault();

    // 이벤트가 발생한 form요소 취득
    const current = e.currentTarget;

    // form요소 내의 input 요소들을 name속성값으로 접근하여 입력값을 얻음
    const id = current.id.value;
    const name = current.name.value;
    const userid = current.userid.value;
    const position = current.position.value;
    const sal = current.sal.value;
    const hiredate = current.hiredate.value.substring(0,10);
    const comm = current.comm.value;
    const deptno = current.deptno.value;

    // 백엔드에 데이터가 수정되었음을 알린다.
    (async () => {
      // ajax 로딩 시작을 알림
      setLoading(true);

      // 수정 결과에 대한 json
      let json = null;
      
      // ajax를 통한 데이터 삭제 요청
      try {
        const response = await axios.put(`/professor/${id}`, {
            name: name,
            userid: userid,
            position: position,
            sal: sal,
            hiredate: hiredate,
            comm: comm,
            deptno: deptno
        });
        // 수정 결과에 대한 json을 받음
        json = response.data;
        console.group('데이터 수정 결과');
        console.log(json);
        console.groupEnd();
      } catch (e) {
        console.error(e);
        alert(`데이터  수정에 실패했습니다. \n${e.message}`);
        return;
      } finally {
        setLoading(false);
      }

      // 수정 결과로 원본 배열의 원소를 교체한다.
      setProfessor(professor => {
        // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
        const editId = professor.findIndex((v,i) => v.id === json.id);
        console.log(`제거할 대상의 배열 인덱스: ${editId}`);

        // 상태값이 배열이므로 인덱스 번호가 editId인 위치에서 1개의 데이터를 교체
        professor.splice(editId,1,json);
        return professor;
      });
    })();
    // 상태변수를 되돌린다.
    setUpdateId(-1);
  },[]);

  return (
    <div>
      <Spinner loading={loading} />
      {/* 입력폼 */}
      <form onSubmit={onDataAddSubmit}>
        <div>
          <label htmlFor='id'>교수번호 : </label>
          <input type='text' name='id' id='id' />
        </div>
        <div>
          <label htmlFor='name'>교수이름 : </label>
          <input type='text' name='name' id='name' />
        </div>
        <div>
          <label htmlFor='userid'>교수아이디 : </label>
          <input type='text' name='userid' id='userid' />
        </div>
        <div>
          <label htmlFor='position'>직책 : </label>
          <input type='text' name='position' id='position' />
        </div>
        <div>
          <label htmlFor='sal'>급여 : </label>
          <input type='text' name='sal' id='sal' />
        </div>
        <div>
          <label htmlFor='hiredate'>고용일 : </label>
          <input type='text' name='hiredate' id='hiredate' />
        </div>
        <div>
          <label htmlFor='comm'>수수료 : </label>
          <input type='text' name='comm' id='comm' />
        </div>
        <div>
          <label htmlFor='deptno'>학과번호 : </label>
          <input type='text' name='deptno' id='deptno' />
        </div>
        <button type='submit'>저장하기</button>
      </form>

      {/* 검색폼 */}
      <form onSubmit={onSearchSubmit}>
        <input type='text' name='keyword' />
        <button type='submit'>검색</button>
      </form>

      <hr />

      <form onSubmit={onDataEditSubmit}>
        <table border='1'>
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
            {!professor.length ? (
              <tr>
                <td colSpan='9' align='center'>
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              professor.map((item,index) => {
                // 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면?
                if (item.id === updateId) {
                  return (
                    <tr key={item.id}>
                      {/* 수정을 위한 input요소를 표시 */}
                      <td><input type='hidden' name='id' defaultValue={item.id} />{item.id}</td>
                      <td><input type='text' name='name' defaultValue={item.name} /></td>
                      <td><input type='text' name='userid' defaultValue={item.userid} /></td>
                      <td><input type='text' name='position' defaultValue={item.position} /></td>
                      <td><input type='text' name='sal' defaultValue={item.sal} /></td>
                      <td><input type='text' name='hiredate' defaultValue={item.hiredate.substring(0,10)} /></td>
                      <td><input type='text' name='comm' defaultValue={item.comm} /></td>
                      <td><input type='text' name='deptno' defaultValue={item.deptno} /></td>
                      <td colSpan='2'>
                        <button type='submit'>수정사항 저장</button>
                      </td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.userid}</td>
                      <td>{item.position}</td>
                      <td>{item.sal}</td>
                      <td>{item.hiredate.substring(0,10)}</td>
                      <td>{item.comm}</td>
                      <td>{item.deptno}</td>
                      <td>
                        <button type='button' data-id={item.id} onClick={onDataEditClick}>수정하기</button>
                      </td>
                      <td>
                        <button type='button' data-id={item.id} onClick={onDataDeleteClick}>삭제하기</button>
                      </td>
                    </tr>
                  )
                }
              })
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
});

export default React.memo(Professor);