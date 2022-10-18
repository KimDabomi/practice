/* 1. 자신의 이메일 주소를 email 이라는 변수에 저장하고 @를 기준으로 아이디와 도메인 부분을 분리하여 출력하시오. 
leekh4232
gmail.com */
const email = "cdabomi@nate.com";
const p1 = email.substring(0,email.indexOf("@"));
const p2 = email.substring(email.indexOf("@")+1);
console.log(p1);
console.log(p2);