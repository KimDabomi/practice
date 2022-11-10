import React from 'react';
import PropTypes from 'prop-types';

const MyPropTypesSub = ({name,age,hobby}) => {
  return (
    <div>
      <h3>MyPropTypesSub</h3>
      <p>
        안녕하세요, 제 이름은 {name}이고, 나이는 {age}세 입니다.
      </p>
      <p>
        {hobby && (<span>cnlalsms {hobby}입니다.</span>)}
      </p>
    </div>
  );
};

MyPropTypesSub.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobby: PropTypes.string.isRequired
};

export default MyPropTypesSub;