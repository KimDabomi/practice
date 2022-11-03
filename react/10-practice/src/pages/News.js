import React,{memo,useState,useEffect} from 'react';
import axios from 'axios';
import NewsList from '../components/NewsList';
import Spinner from '../components/Spinner';

const News = memo(() => {
  // 화면에 표시할 상태값 (ajax 연동 결과로 받아올 json) -> 초기값을 반 배열로 정의
  // ajax 처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관없이 화면 출력이 먼저 수행된다. 그러므로 ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신되도록 처리해야 한다.
  const [newsList, setNewList] = useState([]);
  const [loading, setLoading] = useState(false);

  // 페이지가 처음 열렸을 때 실행할 hook
  // hook에 전달되는 콜백함수에 직접적으로 async를 적용할 수 없다.
  useEffect(() => {
    // async~await 처리를 위한 즉시 실행 함수 정의
    (async () => {
      // ajax 로딩 시작을 알림
      setLoading(true);

      // ajax의 결과를 저장할 변수
      let json = null;
      try {
        const response = await axios.get("/news/");
        json = response.data;
      } catch (e) {
        console.error(e);
        alert(`데이터 요청에 실패했습니다.\n${e.message}`);
        return;
      } finally {
        setLoading(false);
      }

      // ajax의 요청 결과를 상태값에 반영한다
      setNewList(json);
    })();
  },[]);

  return (
    <div>
      <Spinner loading={loading} />
      <NewsList news={newsList} />
    </div>
  );
});

export default News;