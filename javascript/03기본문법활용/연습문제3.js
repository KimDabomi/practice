/* 문제 3.
1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오. */

const x=2;
const y=3;
let sum = 0;
for (let i=1; i<20; i++) {
    if ( i % x == 0 || i % y == 0) {
        console.log(i);
        sum += i;
    }
}
console.log("총 합:", sum);