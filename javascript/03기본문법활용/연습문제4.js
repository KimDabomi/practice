/* 문제 4.
두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하고 경우의 수는 총 몇가지 인지를 아래와 같이 출력하는 코드를 작성하시오.
[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ]
경우의 수는 5개 입니다.
*/
let count=0;
for (let i=1; i<6; i++) {
    for(let j=1; j<6; j++) {
        if (i+j==6) {
            console.log("[ %d, %d ]",i,j);
            count++;
        }
    }
}
console.log("경우의 수는 %d개 입니다.",count);