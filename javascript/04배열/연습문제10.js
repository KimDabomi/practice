/* 10. 위의 문제에서 반 평균을 출력하시오. 반 평균은 학생의 평균점수 총 합/학생수로 구합니다.
[주의] toFixed() 함수로 가공된 값은 문자열 형태이기 때문에 숫자 연산이 불가능합니다. 이를 감안하
여 반 점수를 구하세요. */

const student = ["둘리","도우너","또치","희동"];
const grade = [
    [78,89,96],[62,77,67],[54,90,80],[100,99,98]
];
let sum=0, avg=0;
var class_sum=0;
var class_avg=0;
for (let i=0; i<grade.length; i++) {
    sum = 0;
    for (let j=0; j<grade[i].length; j++) {
        sum += grade[i][j];
    }
    avg = sum / grade[i].length;
    class_sum += avg;
    avg = avg.toFixed(2);
    console.log(student[i] + " 총점: " + sum + "점, 평균: " + avg + "점");
}
class_avg = class_sum / student.length;
class_avg.toFixed(2);
console.log("반평균=" + class_avg + "점");