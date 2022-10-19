import React from 'react';
import GradeItem from './GradeItem';
import GradeData from './GradeData';
import {useParams} from 'react-router-dom';
import Meta from './Meta';

const GradeTable = () => {
    const {level} = useParams();
    const table = GradeData[`${level}학년`];
    return (
        <div>
            <Meta title={`${level}학년 ::: React 연습문제`} />
            <h2>{level}학년</h2>
            <table border="1" cellPadding="7">
                <thead>
                    <tr align="center">
                        <td>이름</td>
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
                    {table.map((v,i) => {
                        return (
                            <GradeItem key={i} name={v.이름}
                            sex={v.성별} kor={v.국어} eng={v.영어} math={v.수학} sinc={v.과학} />)
                    })}
                </tbody>
            </table>
        </div>
    );  
};

export default GradeTable;