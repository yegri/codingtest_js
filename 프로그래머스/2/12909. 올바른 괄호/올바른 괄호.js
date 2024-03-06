function solution(s){
    let count = 0
    
    for (let i = 0; i < s.length; i++){
        count += s[i] === '(' ? 1 : -1
        
        // (가 먼저 나온 것이 없는데 )이 나왔다면 count는 -1 
        if (count < 0) return false
    }
    
    // count가 0보다 크다면 )가 더 남아있다는 것
    // count가 0일 때 true 반환, 아니면 false 반환
    return count === 0 ? true : false
}