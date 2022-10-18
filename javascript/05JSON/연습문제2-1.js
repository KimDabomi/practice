/* 2-1. 위 데이터에서 학생별 총점과 평균을 구하시오. */

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
   };
for (const key in exam) {
    let sum = 0; 
    for (const y of exam[key]) {
        sum += y;
    }
let avg = sum / exam[key].length;
avg = avg.toFixed(2);
console.log(key + "의 총점은 " + sum + "이고 평균은 " + avg + "점 입니다.");
}