/* 4. 주어진 범위 안에서 랜덤한 숫자를 추출하는 함수는 아래와 같다.function random(n1, n2) {
 return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}
0개의 원소를 갖는 배열 lotto를 생성하고 6회의 반복을 수행하는 for문을 사용하여 배열의 각 원소를 1~45 사이의 범위를
갖는 임의의 숫자로 채워 넣으시오.
반복이 종료되었을 때 lotto의 원소는 6개의 숫자가 채워져 있어야 하고 각 숫자는 중복되지 않아야 합니다.
중복되지 않는 숫자를 생성하기 위해 for문 안에서 무한반복을 위한 while문을 수행해야 합니다. */

function random(n1,n2) {
    return parseInt(Math.random() * (n2-n1+1)) + n1;
}
const lotto = [];
console.log(lotto);
for (let i=0; i<6; i++) {
    while(true) {
        const rnd = random(1,45);
        if (!lotto.includes(rnd)) {
            lotto.push(rnd);
            break;
        }
    }
}
console.log(lotto);



