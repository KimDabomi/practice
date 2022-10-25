import React from 'react';

const Calc = () => {
  const x = React.useRef();
  const y = React.useRef();
  const exec = React.useRef();
  const console = React.useRef();

  function getResultValue(state,action) {
    const X = parseInt(x.current.value);
    const Y = parseInt(y.current.value);
    switch (action) {
      case 'PLUS':
        return X+Y;
      case 'MINUS':
        return X-Y;
      case 'SUM':
        return X*Y;
      case 'DIV':
        return X/Y;
    }
  }

  const [resultValue, setResultValue] = React.useReducer(getResultValue,0);

  React.useMemo(() => {
    if (resultValue % 2 == 0) {
      console.color = 'red';
    } else {
      console.color = 'blue';
    }
  },[resultValue]);

  return (
    <div>
      <h2>Calc</h2>
      <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
      <input type='text' ref={x} />
      <select ref={exec}>
        <option value="PLUS">+</option>
        <option value="MINUS">-</option>
        <option value="SUM">*</option>
        <option value="DIV">/</option>
      </select>
      <input type='text' ref={y} />
      <button type='button' onClick={e => {
        setResultValue(exec.current.value);
      }}>결과확인</button>
      <hr />
      <div ref={console}>결과값 : {resultValue}</div>
    </div>
  );
};

export default Calc;