import React from 'react';
import PropTypes from 'prop-types';

const GradeItem = ({name,sex,kor,eng,math,sinc}) => {
  const sum = parseInt(kor+eng+math+sinc);
  const avg = parseInt(sum/4);
  return (
    <tr aligh="center">
      <td><strong>{name}</strong></td>
      <td><strong>{sex}</strong></td>
      <td><strong>{kor}</strong></td>
      <td><strong>{eng}</strong></td>
      <td><strong>{math}</strong></td>
      <td><strong>{sinc}</strong></td>
      <td><strong>{sum}</strong></td>
      <td><strong>{avg}</strong></td>
    </tr>
  );
};

GradeItem.propTypes = {
  name: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  kor: PropTypes.number.isRequired,
  eng: PropTypes.number.isRequired,
  math: PropTypes.number.isRequired,
  sinc: PropTypes.number.isRequired
};

GradeItem.defaultProps = {
  kor:0,
  eng:0,
  math:0,
  sinc:0
};
export default GradeItem;