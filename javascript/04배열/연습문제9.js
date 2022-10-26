/* 9. 학생별 총점과 평균점수를 구하기 위한 소스코드를 아래와 같이 작성중이다. 빈 칸을 완성하시오.
단, 평균점수의 경우 toFixed() 함수를 사용하여 소수점 둘째 자리까지만 출력하시오. */

const student = ["둘리","도우너","또치","희동"];
const grade = [
    [78,89,96],[62,77,67],[54,90,80],[100,99,98]
];
let sum=0, avg=0;
for (let i=0; i<grade.length; i++) {
    sum = 0;
    for (let j=0; j<grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    avg = avg.toFixed(2);
    console.log(student[i] + " 총점: " + sum + "점, 평균: " + avg + "점");
}