/* 2. 임의의 주민번호를 다음과 같이 *을 포함하여 변수에 저장하시오.
ssn = '020517-3******'
또한 현재 년도를 now_year라는 변수로 저장하시오.
이 값을 사용하여 생년월일, 나이, 성별을 출력하시오.
2002년 5월 17일에 태어난 20세 남자 입니다. */


const ssn = '020517-3******';
const date = new Date();
const now_year = date.getFullYear();
let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let gen = parseInt(ssn.substring(7,8));

yy = (gen > 2) ? yy+2000 : yy+1900;
const age = now_year - yy + 1;
const sex = (gen % 2) ? "남자" : "여자";

console.log("%d년 %d월 %d일에 태어난 %d세 %s입니다.",yy,mm,dd,age,sex);