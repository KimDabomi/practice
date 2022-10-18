/* 7. 아래의 소스코드는 위의 상품 목록에서 상품의 가격을 원소로 하는 배열 money를 정의하였을 때 “낮은가격순”버튼이 눌러졌을 때 상품의 가격을 재정렬하기 위한 코드에 대한 일부이다. 빈 칸을 채워넣어 완성하시오. */

var price = [209000,109000,119000,109000,94000];
console.log("상품가격 -- > "+price);
for (var i=0; i<price.length-1; i++) {
    for (var j=i+1; j<price.length; j++) {
        if (price[i] > price[j]) {
            const tmp = price[i];
            price[i] = price[j];
            price[j] = tmp;
        }
    }
}
console.log("낮은가격순 --> "+price);