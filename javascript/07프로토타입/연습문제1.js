/* 1. 국어, 영어, 수학 점수를 생성자 파라미터로 입력받아서 합계와 평균을 구하는 클래스 Student를 작성하시오.
이 때 Student 클래스는 합계를 리턴하는 메서드인 sum()과 평균을 리턴하는 avg()를 제공합니다.
작성된 클래스를 활용하여 아래 표에 대한 학생별 합계 점수와 평균점수를 출력하시오.
클래스는 JSON 형식으로 작성되어야 합니다. */

function Student(kor, eng, math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;
}

Student.prototype = {
    sum : function() {
        return this._kor + this._eng + this._math;
    },
    avg : function() {
        return this.sum() / 3;
    }
};

console.group("하드코딩");
const s1 = new Student(92,81,77);
const s2 = new Student(72,95,98);
const s3 = new Student(80,86,84);
console.log("철수의 총점은 %d점이고 평균은 %d점 입니다.",s1.sum(),s1.avg());
console.log("영희 총점은 %d점이고 평균은 %d점 입니다.",s2.sum(),s2.avg());
console.log("민혁의 총점은 %d점이고 평균은 %d점 입니다.",s3.sum(),s3.avg());
console.groupEnd();

// 다른 방법
console.group("반복문 안에서 객체 활용");
const grade = [
    ["철수",92,81,77],
    ["영희",72,95,98],
    ["민혁",80,86,84]
];
for (const item of grade) {
    const s = new Student(item[1],item[2],item[3]);
    console.log("%s의 총점은 %d점이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
}
console.groupEnd();