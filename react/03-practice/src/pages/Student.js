import React from 'react';
import data from '../myschool';

const Student = () => {
  return (
    <div>
        <table border="1" cellPadding="7">
            <thead>
                <tr>
                    <td><strong>학생번호</strong></td>
                    <td><strong>학생이름</strong></td>
                    <td><strong>아이디</strong></td>
                    <td><strong>학년</strong></td>
                    <td><strong>주민번호</strong></td>
                    <td><strong>생년월일</strong></td>
                    <td><strong>연락처</strong></td>
                    <td><strong>키</strong></td>
                    <td><strong>몸무게</strong></td>
                    <td><strong>소속학과번호</strong></td>
                    <td><strong>담당교수번호</strong></td>
                </tr>
            </thead>
            <tbody>
                {data.student.map((v,i) => {
                    return (
                    <tr>
                        <td>{v.id}</td>
                        <td>{v.name}</td>
                        <td>{v.userid}</td>
                        <td>{v.grade}</td>
                        <td>{v.birthdate.substring(2,10).replaceAll('-','')+"-*******"}</td>
                        <td>{v.birthdate.substring(0,10)}</td>
                        <td>{v.tel}</td>
                        <td>{v.height}</td>
                        <td>{v.weight}</td>
                        <td>{v.deptno}</td>
                        <td>{v.profno}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  );
};

export default Student;