function solution(s) {
    
    let first = ''
    let same = 0
    let different = 0
    let answer = 0
    
    for(let i = 0; i < s.length; i++){
        // 첫 문자를 알기 위해 첫 문자가 공백이라면 첫 문자 넣어주기
        if (!first) first = s[i]
        
        if(first === s[i]) same++
        else different++
        
        // same과 different가 같다면
        // answer 1증가
        // 나머지는 초기화
        if (same === different) {
            answer++
            same = 0
            different = 0
            first = ''
        }
    }
    
    // 반복문이 끝났는데 first가 남아있는 경우
    // 잔여 문자가 남아있는 경우이므로 answer 1 증가 시키기
    if (first) answer++
    
    return answer
}