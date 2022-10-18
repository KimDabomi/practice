/* 3-2. 1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가? */

const covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
];

let max_active = covid19[0].active;
let max_date = covid19[0].date;
for (let i=1; i<covid19.length; i++) {
    if (max_active < covid19[i].active) {
        max_active = covid19[i].active;
        max_date = covid19[i].date;
    }
}
console.log("확진자가 가장 많이 나타난 날: %s", max_date);

