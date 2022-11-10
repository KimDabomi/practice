import React from 'react';

const MypropsSub = (props) => {
  console.group("MyPropsSub");
  console.log(props);
  console.log(typeof props.name);
  console.log(typeof props.age);
  console.groupEnd();

  return (
    <div>
        <h3>MypropsSub</h3>
        <p>제 이름은 <b>{props.name}</b>이고 나이는 <b>{props.age}</b>입니다.</p>
    </div>
  );
};

// 속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의해둘 수 있다.
// defaultProps 객체이름 고정
MypropsSub.defaultProps = {
  name: '이름없음',
  age: 20
};

export default MypropsSub;