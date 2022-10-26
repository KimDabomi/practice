/* 1. max는 출력해야 할 최대 라인 수
function printStar(max) {
 ... 구현하세요 ...
}
printStar(5) */

function printStar(max) {
    for (let i=0; i<max; i++) {
        let str=""; // 매 행마다 초기화
        for (let j=0; j<i+1; j++) {
            str += "*";
        }
        console.log(str);
    }
}
printStar(5);