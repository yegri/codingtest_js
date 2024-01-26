function solution(n) {
    // 합성수의 총 개수를 저장
    let answer = 0
    
    for (let i = 1; i <= n; i++){
        // 약수 개수 저장
        let count = 0
        
        for (let j = 1; j <= i; j++){
            if(i % j === 0){
                count++
            }
        }
        
        if (count > 2){
            answer++
        }
    }
    
    return answer
    
}