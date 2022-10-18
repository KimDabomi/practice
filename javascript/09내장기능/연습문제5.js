/* 5. 1~45사이의 범위의 1씩 증가 하는 원소가 저장되어 있는 배열 balls을 생성하고 6개의 빈 칸을 갖는 배열 lotto를 생성하시오.
lotto 배열을 탐색하는 반복을 수행하면서 balls 배열에서 임의의 원소 하나를 추출하여 lotto 배열에 채워 넣으시오.
추출된 숫자는 balls 배열에서는 삭제되어야 합니다. */

function random(n1,n2) {
    return parseInt(Math.random() * (n2-n1+1)) + n1;
}
// 1~45 사이의 범위의 1씩 증가하는 원소가 저장되어 있는 배열 balls를 생성
const balls = new Array(45);
for (let i=0; i<balls.length; i++) {
    balls[i] = i+1;
}
// 6개의 빈 칸을 갖는 배열 lotto를 생성
const lotto = new Array(6);
for (let i=0; i<lotto.length; i++) {
    console.log(balls);
    // balls의 index범위 안에서 임의의 위치를 선정
    const rnd = random(0,balls.length-1);
    // ball 배열에서 임의의 원소 하나를 추출하려 lotto 배열에 채워넣기
    lotto[i] = balls[rnd];
    // rnd번째 위치에서 하나의 데이터를 잘라냄
    balls.splice(rnd,1);
}
console.log(lotto);