import React from 'react';
import data from '../myschool';

const Professor = () => {
  return (
    <div>
        <table border="1" cellPadding="7">
            <thead>
                <tr>
                    <td><strong>교수번호</strong></td>
                    <td><strong>교수이름</strong></td>
                    <td><strong>아이디</strong></td>
                    <td><strong>직급</strong></td>
                    <td><strong>급여</strong></td>
                    <td><strong>입사일</strong></td>
                    <td><strong>보직수당</strong></td>
                    <td><strong>소속학과번호</strong></td>
                </tr>
            </thead>
            <tbody>
                {data.professor.map((v,i) => {
                    return (
                    <tr>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.userid}</td>
                        <td>{v.position}</td>
                        <td>{v.sal}</td>
                        <td>{v.hiredate.substring(0,10)}</td>
                        <td>{v.comm}</td>
                        <td>{v.deptno}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  );
};

export default Professor;