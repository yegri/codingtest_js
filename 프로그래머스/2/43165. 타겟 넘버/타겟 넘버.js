function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length
    
    // count: 중단점 / sum: 합
    function dfs(count, sum){
        if (count === length){
            if (target === sum){
                answer++
            }
            
            return
        }
        
        // + 연산자 계산
        dfs(count + 1, sum + numbers[count])
        
        // - 연산자 계산
        dfs(count + 1, sum - numbers[count])
    }
    
    dfs(0,0)
    
    return answer;
}