import React from 'react';
import data from '../myschool';

const Department = () => {
  return (
    <div>
        <table border="1" cellPadding="7">
            <thead>
                <tr>
                    <td><strong>학과번호</strong></td>
                    <td><strong>학과이름</strong></td>
                    <td><strong>위치</strong></td>
                </tr>
            </thead>
            <tbody>
                {data.department.map((v,i) => {
                    return (
                    <tr>
                        <td>{v.id}</td>
                        <td>{v.dname}</td>
                        <td>{v.loc}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div>
  );
};

export default Department;