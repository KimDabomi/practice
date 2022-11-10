import React from 'react'
import MyChildrenSub from '../components/MyChildrenSub';
import Meta from '../Meta';

const MyChildren = () => {
  return (
    <div>
      <Meta title="MyChildren.js" description="여기는 MyChildren.js 파일입니다." />

      <h2>MyChildren</h2>
      <MyChildrenSub width={400} height={100}><b>Hello World</b></MyChildrenSub>
      <MyChildrenSub width={300} height={80}>안녕 React</MyChildrenSub>
      <MyChildrenSub width={200} height={50} />
    </div>
  );
};

export default MyChildren;