/* 5. 문제 4번의 장바구니 내역에서 상품금액(판매가*수량)이 가장 비싼 항목은 얼마인지 출력하시오. */

var price = [38000,20000,17900,17900];
var qty = [6,4,3,5];
let money = price[0] * qty[0];
for (let i=1; i<price.length; i++) {
    const sum = price[i] * qty[i];
    if (money < sum) {
        money = sum;
    }
}
console.log("가장 높은 상품금액: "+money+"원");