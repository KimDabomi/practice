/* 1. ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
아래와 같은 JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오. (혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0}; */

// 풀이1
const blood = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
for (const k of blood) {
    if (k =='A') {
        result.A++;
    } else if (k == 'B') {
        result.B++;
    } else if (k == 'O') {
        result.O++;
    } else {
        result.AB++;
    }
}
console.log(result);

// 풀이2
for (const k of blood) {result[k]++;}