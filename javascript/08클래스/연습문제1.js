/* 1. 국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.
이 때 Student 클래스는 합계를 리턴하는 메서드인 sum()과 평균을 리턴하는 avg()를 제공합니다.
작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.
클래스는 JSON 형식으로 작성되어야 합니다. */
class Student {
    kor;
    eng;
    math;
    constructor(kor, eng, math) {
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }
    sum() {
        return this.kor + this.eng + this.math;
    }
    avg() {
        return (this.kor + this.eng + this.math) / 3;
    }
}

const s1 = new Student(92,81,77);
const s2 = new Student(72,95,98);
const s3 = new Student(80,86,84);
console.log("철수의 총점은 %d점이고 평균은 %d점 입니다.",s1.sum(),s1.avg());
console.log("영희 총점은 %d점이고 평균은 %d점 입니다.",s2.sum(),s2.avg());
console.log("민혁의 총점은 %d점이고 평균은 %d점 입니다.",s3.sum(),s3.avg());
console.groupEnd();