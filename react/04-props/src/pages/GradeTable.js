import React from 'react';
import Meta from '../Meta';
import GradeData from '../GradeData';
import GradeItem from '../components/GradeItem';

const GardeTable = () => {
  return (
    <div>
      <Meta title="성적표(Demo)" description="성적표 구현 예제" />
      <h2>성적표</h2>
      <table border="1" cellPadding="7">
        <thead>
          <tr align="center">
            <td>이름</td>
            <td>학년</td>
            <td>성별</td>
            <td>국어</td>
            <td>영어</td>
            <td>수학</td>
            <td>과학</td>
            <td>총점</td>
            <td>평균</td>
          </tr>
        </thead>
        <tbody>
          {GradeData.map((v,i) => {
            return (
              <GradeItem key={i} name={v.이름} level={v.학년}
              sex={v.성별} kor={v.국어} eng={v.영어} math={v.수학} sinc={v.과학} />)
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GardeTable;