import React from 'react';

const PrintStar = () => {
  const [rowNum, setRowNum] = React.useState(0);
  const console = React.useRef();

  React.useEffect(() => {
    let str=""; 
    for (let i=0; i<rowNum; i++) {
      for (let j=0; j<i+1; j++) {
        str += "*";
      }
      str += "<br />";
    }
    console.current.innerHTML = str;
  },[rowNum]);

  const onInputChange = e => {
    setRowNum(e.currentTarget.value);
  };

  return (
    <div>
      <h2>PrintStar</h2>
      <p>useState, useEffect, useRef를 사용한 별찍기 구현</p>
      <label htmlFor="rowNumInput">rownum: </label>
      <input type='number' placeholder='input...' onChange={onInputChange} />
      <hr />
      <div ref={console}></div>
    </div>
  );
};

export default PrintStar;