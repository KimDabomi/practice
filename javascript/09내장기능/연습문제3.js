/* 3. 아래의 문장에서 "수업시간"이라는 단어가 총 몇 번 등장하는지 카운트 하는 프로그램을 구현하시오.
str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다." */

str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
word = "수업시간";
flen = word.length;
find = true;
count = 0;
while(find) {
    console.log(str);
    p = str.indexOf(word);
    find = p > -1;
    if (find) {
        count++;
        str = str.substring(p+flen);
    }
}
console.log(count);