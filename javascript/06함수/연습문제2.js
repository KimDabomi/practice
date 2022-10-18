/* 2. 1번 문제를 응용하여 같은 파라미터를 받았을 때 별을 역으로 출력하는 printRevStar(max) 을 구현하시오. */

function printStar(max) {
    for (let i=0; i<max; i++) {
        let str=""; // 매 행마다 초기화
        for (let j=0; j<max-i; j++) {
            str += "*";
        }
        console.log(str);
    }
}
printStar(5);