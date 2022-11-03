import React,{memo,useState,useEffect,useCallback} from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import {useLocation,useNavigate} from 'react-router-dom';

const Department = memo(() => {
  // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);
  // 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [department, setDepartment] = useState([]);
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
        const response = await axios.get("/department/", {
          // 검색어가 있다면 dname값으로 설정, 그렇지 않으면 정의 안함
          params: keyword ? {dname: keyword} : null
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
      setDepartment(department => json);
    })();
  },[keyword]);

  // 검색폼에서의 전송이벤트 - 성능 최적화를 위해 useCallback 적용
  const onSearchSubmit = useCallback(e => {
    e.preventDefault();
    console.log('submit!');
    // 검색어를 QueryString으로 지정하여 페이지로 이동 (여기서 keyword는 form의 name속성으로 불러온 input)
    navigate(`/department?keyword=${e.currentTarget.keyword.value}`)
  },[navigate]);

  // 데이터 추가 submit 이벤트
  const onDataAddSubmit = useCallback(e => {
    e.preventDefault();

    // 이벤트가 발생한 폼 자신
    const form = e.currentTarget;
    
    // 폼 안의 input태그에 name속성으로 접근하여 입력값 취득
    const dname = form.dname.value;
    const loc = form.loc.value;

    (async () => {
      setLoading(loading => true);
      let json = null;

      try {
        const response = await axios.post("/department/", {
          // 입력값을 post 파라미터로 전달
          dname: dname,
          loc: loc
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

      setDepartment(department => department.concat(json));
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
        await axios.delete(`/department/${id}`);
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패했습니다. \n${e.message}`);
        return;
      } finally {
        setLoading(loading => false);
      }
      // ajax 삭제처리가 완료되면 프론트엔드가 가지고 있던 복사본(department 상태값)에서도 동일한 항목을 찾아야한다.
      setDepartment(department => {
        const dropId = department.findIndex((v,i) => {
          return v.id === id;
        });
        console.log(`제거할 대상의 배열 인덱스: ${dropId}`);
        
        // 상태값이 배열이므로 인덱스 번호가 dropId인 위치에서 1개의 데이터 삭제
        department.splice(dropId,1);

        // 제거 결과를 리턴
        return department;
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
    const dname = current.dname.value;
    const loc = current.loc.value;

    // 백엔드에 데이터가 수정되었음을 알린다.
    (async () => {
      // ajax 로딩 시작을 알림
      setLoading(true);

      // 수정 결과에 대한 json
      let json = null;
      
      // ajax를 통한 데이터 삭제 요청
      try {
        const response = await axios.put(`/department/${id}`, {
          dname: dname,
          loc: loc
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
      setDepartment(department => {
        // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
        const editId = department.findIndex((v,i) => v.id === json.id);
        console.log(`제거할 대상의 배열 인덱스: ${editId}`);

        // 상태값이 배열이므로 인덱스 번호가 editId인 위치에서 1개의 데이터를 교체
        department.splice(editId,1,json);
        return department;
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
          <label htmlFor='dname'>학과 : </label>
          <input type='text' name='dname' id='dname' />
        </div>
        <div>
          <label htmlFor='loc'>위치 : </label>
          <input type='text' name='loc' id='loc' />
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
              <th>학과번호</th>
              <th>학과명</th>
              <th>학과위치</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {!department.length ? (
              <tr>
                <td colSpan='5' align='center'>
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : (
              department.map((item,index) => {
                // 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면?
                if (item.id === updateId) {
                  return (
                    <tr key={item.id}>
                      {/* 수정을 위한 input요소를 표시 */}
                      <input type='hidden' name='id' defaultValue={item.id} />
                      <td>{item.id}</td>
                      <td><input type='text' name='dname' defaultValue={item.dname} /></td>
                      <td><input type='text' name='loc' defaultValue={item.loc} /></td>
                      <td colSpan='2'>
                        <button type='submit'>수정사항 저장</button>
                      </td>
                    </tr>
                  )
                } else {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.dname}</td>
                      <td>{item.loc}</td>
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

export default React.memo(Department);