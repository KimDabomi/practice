/* 8. 아래의 코드는 배열의 원소를 반대로 배치하는 소스코드의 일부이다.
빈 칸을 완성하시오. (번호가 같은 박스는 같은 코드가 들어갑니다.) */

let arr = [5,3,2,8,9];
const p = arr.length % 2 == 0 ? arr.length / 2 : (arr.length-1)/2;
console.log("before --> "+arr);
for (let i = 0; i < p; i++) {
    const k = arr.length - i - 1;
    var tmp = arr[i];
    arr[i] = arr[k];
    arr[k] = tmp;
}
console.log("after --> "+arr);