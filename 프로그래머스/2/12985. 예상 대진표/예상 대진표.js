function solution(n,a,b)
{
    let answer = 0
    
    // 4 - 3 -> 2   7 - 8 -> 4
    // 2 - 1 -> 1   4 - 3 -> 2
    // 1 - 2
    
    // 4 - 3 -> 2   6 - 5 -> 3
    // 2 - 3
    
    // 2 - 1 -> 1   3 - 4 -> 2
    // 1 - 2
    
    while(a !== b){
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
        
        answer++
    }
    
    return answer
}