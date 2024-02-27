function solution(nums) {
    let answer = 0
    const tmp = []
    
    const backtrack = (cur) => {
        let sum = 0
        
        if (tmp.length === 3){
            tmp.map(x => sum += x)
            
            // 소수 판별하기 - sum이 i로 나눠 떨어진다면 소수 아님
            for(let i = 2; i <= sum / 2; i++){
                if (sum % i === 0) return;
            }
            
            // 반복문을 다 돌 때까지 if문이 실행되지 않으면 소수임
            return answer++
        }
        
        for(let i = cur; i < nums.length; i++){
            tmp.push(nums[i])
            backtrack(i+1)
            tmp.pop()
        }
    }
    
    backtrack(0)
    
    return answer
}