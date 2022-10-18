/* 4. 상품의 가격을 원소로 갖는 1차 배열 price와 각 상품의 수량을 원소로 갖는 1차 배열 qty를 다음과 같이 정의하였을 때 이 사람이 총 얼마를 결제해야 하는지 총 결제금액을 구하는 프로그램을 작성하시오. */

var price = [38000,20000,17900,17900];
var qty = [6,4,3,5];
var money = 0;
for (let i=0; i<price.length; i++) {
    money += price[i] * qty[i];
}
console.log("전체 결제 금액: "+money+"원");
