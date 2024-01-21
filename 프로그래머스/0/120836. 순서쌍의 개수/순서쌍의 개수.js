function solution(n) {
    let index = 1
    let answer = 0
    
    while (index <= n){
        if (n % index === 0){
            answer += 1
        }
        
        index+=1
    }
    
    return answer
}