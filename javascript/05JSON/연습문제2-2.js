/* 2-2. 위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오. */

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
   };
   let sum=0;
   let student_count=0;
   for (const key in exam) {
    sum += exam[key][2];
    student_count++;
   }
   let avg = sum / student_count;
   console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg);
