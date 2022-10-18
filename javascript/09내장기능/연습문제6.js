/* 6. 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 없습니다. */

function solution(participant,completion) {
    var answer = '';
    // participant 원소 중에서 completion에 속하지 않으면 그 순간 반복 중단

    /* 1) for문을 사용해 탐색하다가 break 사용
    for (let i=0; i<participant.length; i++) {
        const p = participant[i];
        - i번째 원소가 completion에 들어있다면?
        if (!completion.includes(p)) {
            answer = p;
            break;
        }        
    } */
    
    /* 2) 배열의 some함수 사용
    participant.some((v,i) => {
        if(!completion.includes(v)) {
            answer = v;
            return true;
        }
    }); */

    // 3) find 함수 사용
    answer = participant.find((v, i) => {
        if (!completion.includes(v)) {
            return true;
        }
    });
    return answer; 
}
console.log(solution(["leo", "kiki", "eden"], 
 ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
 ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "steave", "ana"], 
 ["stanko", "ana", "mislav"]));