import React from 'react';
import styled,{css} from 'styled-components';

/* 컴포넌트 코드 안에서 SCSS 문법을 적용한 컴포넌트를 직접 정의
- 패키지 설치 필요
    yarn add styled-components
- vscode에서 styled-components 지원을 위한 확장프로그램
    vscode-styled-components */
const MyGridContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 1024px;
  border: 5px solid #cc0;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const MyGridItem = styled.li`
  /* width: 33%; */
  /* 전달받은 변수값에 접근하여 넓이를 동적으로 설정
  - jsx로부터 전달받은 변수들을 props라는 이름의 객체 형태로 주입받는 콜백함수를 정의한다. 이 콜백함수에서 리턴하는 값이 이 위치에 적용된다. */
  /* width: ${function (props) {
      return props.width;
  }}; */
  width: ${(props) => props.width};
`;

const MyBox = styled.div`
  border: 3px dotted #000;
  background-color: #eee;
  height: 100px;
  text-align: center;
  font-size: 20px;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.1s ease-in;
  color: ${(props) => props.color || 'black'};
  &:hover {
    transform: scale(1.05,1.05) rotate(-10deg);
    background-color: ${(props) => props.color || '#eeeeee'};
    color: #fff;
  }
  ${(props) => 
    props.number % 2 === 1 && 
    css`
      font-weight: bold;
      font-style: italic;
      text-decoration: underline;
    `}
`;

const StyledComponent = () => {
  const myColors = ['red','green','blue','purple','orange','yellow','pink'];

  // 배열 전체를 100으로 봤을 때 하나 당 몇 %인지 계산
  const myWidth = 100/myColors.length + '%';
  return (
    <div>
      <h2>StyledComponent</h2>
      <h3>단순 태그처럼 사용</h3>
      {/* MyGridItem에게 width라는 이름의 변수값 전달 */}
      <MyGridContainer>
        <MyGridItem width={'30%'}>
          <MyBox>Item1</MyBox>
        </MyGridItem>
        <MyGridItem width={'10%'}>
          <MyBox>Item2</MyBox>
        </MyGridItem>
        <MyGridItem width={'20%'}>
          <MyBox>Item3</MyBox>
        </MyGridItem>
        <MyGridItem width={'15%'}>
          <MyBox>Item4</MyBox>
        </MyGridItem>
        <MyGridItem width={'25%'}>
          <MyBox>Item5</MyBox>
        </MyGridItem>
      </MyGridContainer>
      <h3>배열 원소를 활용한 컴포넌트 사용</h3>
      <MyGridContainer>
        {myColors.map((item,index) => {
          return (
            // styledComponent에게 HTML 속성처럼 전달하는 값들은 변수로서 작용한다. 속성 이름은 특별히 정해진 것은 없다.
            <MyGridItem key={index} width={myWidth}>
              <MyBox color={item} number={index}>
                {item}
              </MyBox>
            </MyGridItem>
          );
        })}
      </MyGridContainer>
    </div>
  );
};

export default StyledComponent;