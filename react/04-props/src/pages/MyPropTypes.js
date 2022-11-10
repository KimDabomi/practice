import React from 'react'
import MyPropTypesSub from '../components/MyPropTypesSub';
import Meta from '../Meta';

const MyPropTypes = () => {
  return (
    <div>
      <Meta title="MyPropTypes.js" description="여기는 MyPropTypes.js 파일입니다." />

      <h2>MyPropTypes</h2>
      <MyPropTypesSub name='민호' age={10} hobby='사진찍기' />
      <MyPropTypesSub name='수영' age='스물한살' hobby='영화보기' />
      <MyPropTypesSub name='철민' age={22} />
    </div>
  );
};

export default MyPropTypes;