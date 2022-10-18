/* 6. 문제4번의 장바구니 내역에서는 모든 장바구니 상품이 개별 배송이라고 한다. 상품금액(판매가*수량)이 8만원 이상인 경우 무료로 배송이 된다고 할 때 무료로 배송되는 항목은 모두 몇 개 인지 구하는 프로그램을 구현하시오. */

var price = [38000,20000,17900,17900];
var qty = [6,4,3,5];
let count = 0;
for (let i=0; i<price.length; i++) {
    const sum = price[i] * qty[i];
    if (sum >=80000) {
        count++;
    }
}
console.log("무료배송 항목: "+count+"건");