import React,{memo,useState,useCallback,useMemo} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const TabContainer = styled.div`
  .tab-button-group {
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    display: flex;

    .tab-button {
      display: block;
      background-color: inherit;
      min-width: 100px;
      box-sizing: border-box;
      border: none;
      outline: none;
      padding: 14px 16px;
      font-size: 17px;
      color: #222;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        box-flex-group: #ccc;
      }
    }
  }
  .tab-page {
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  }
`;

// 탭을 표시하기 위한 컨텐츠 데이터
const tabContent = [{
  id: 'newyouk',
  subject: 'NewYork',
  content: 'NewYork is the capital city of US.'
},{
  id: 'london',
  subject: 'London',
  content: 'London is the capital city of England.'
},{
  id: 'paris',
  subject: 'Paris',
  content: 'Paris is the capital city of France.'
},{
  id: 'seoul',
  subject: 'Seoul',
  content: 'Seoul is the capital city of Korea.'
}];


const TabEx = memo(() => {
  // 현재 표시되고 있는 탭의 인덱스 번호
  const [tabIndex, setTabIndex] = useState(0);

  // 버튼에 대한 클릭 이벤트 함수
  const onTabButtonClick = useCallback((e) => {
    e.preventDefault();
    const current = e.currentTarget;
    const href = current.getAttribute('href');
    console.log(href);

    // tabContent 요소 하나가 element로 전달 -> element의 #id를 href로 지정
    setTabIndex(tabIndex => tabContent.findIndex(element => `#${element.id}` === href));
  },[]);

  // 이벤트 구조분해
  const {subject,content} = useMemo(() => {
    return tabContent[tabIndex];
  },[tabIndex]);

  return (
    <div>
      <h2>TabEx</h2>
      <TabContainer>
        {/* tab 버튼 그룹 */}
        <div className='tab-button-group'>
          {tabContent.map((v,i) => {
            // 조건부 className 적용하기 위한 객체 생성
            const cls = classNames({
              'tab-button': true,
              'active': i === tabIndex
            });
            return (
              <a key={i} className={cls} href={`#${v.id}`} onClick={onTabButtonClick}>{v.subject}</a>
            )
          })}
        </div>

        {/* tab 페이지 영역*/}
        <div className='tab-page'>
          <h3>{tabContent[tabIndex].subject}</h3>
          <p>{tabContent[tabIndex].content}</p>
          <h3>{subject}</h3>
          <p>{content}</p>
        </div>
      </TabContainer>
    </div>
  );
});

export default TabEx;