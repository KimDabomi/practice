/* 3. 369게임은 숫자를 순서대로 말하면서 3,6,9가 포함된 횟수만큼 박수를 치는 게임이다.
1부터 파라미터로 전달된 숫자까지 반복하면서 박수를 칠 조건이 충족되면 3,6,9 게임 규칙에 따라 박수를 의미하는 "짝"을 출력하고 그렇지 않은 경우에는 숫자를 출력하고, 박수를 총 몇번 쳤는지를 리턴하는 함수 myGame(n)을 작성하시오.
힌트: 문자열은 그 자체가 배열로 인식됩니다.
ex) const str = "Hello";
console.log(str[0]); // --> H
console.log(str[1]); // --> e
console.log(str[2]); // --> l */

function myGame(n) {
    let count = 0;
    for (let i=1; i<=n; i++) {
        // 현재 숫자(i)를 문자열로 변환 -> 문자열은 그 자체가 배열이므로 각 자리의 숫자를 의미하는 글자를 원소로 갖는 배열이 된다.
        const str = i + "";
        let say = "";
        let clap = 0;
        // 숫자를 문자열로 변환하여 각 글자 수만큼 반복
        for (let j of str) {
            if ( j=="3" || j=="6" || j=="9") {
                say += "짝";
                clap++;
            }
        }
        if (clap == 0) {
            console.log(i);
        } else {
            console.log("%s (%d) --> %d번", say, i, clap);
            count += clap;
        }
    }
    console.log();
    console.log("박수를 총 %d번 쳤습니다.", count);
}
myGame(35);