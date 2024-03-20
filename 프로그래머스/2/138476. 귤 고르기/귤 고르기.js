function solution(k, tangerine) {
    let count = 0
    let answer = 0
    
    let obj = tangerine.reduce((prev, cur) => {
         prev[cur] = ++prev[cur] || 1;
        
         return prev
    },{})
    
    let sortedArr = Object.values(obj).sort((a,b) => b - a)
    
    for(let i = 0; i < sortedArr.length; i++){
        count += sortedArr[i]
        answer++
        
        if (count >= k) break
    }
    
    return answer
}