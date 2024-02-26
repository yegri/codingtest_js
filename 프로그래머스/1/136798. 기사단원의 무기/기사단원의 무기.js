function solution(number, limit, power) {
    // 약수 구하기
    let divisor = []
    
    for(let i = 1; i <= number; i++){
        let count = 0
        
        // 시간 초과 문제 해결 하기 위해 Math.sqrt() 사용
        for(let j = 1; j <= Math.sqrt(i); j++){
            if (i % j === 0) {
                if (i / j === j) count += 1;
                else count += 2;
            }
        }
        
        divisor.push(count)
    }
    
    // 제한수치를 초과한 무기는 제한수치로 변경
    let filterdDivisor = divisor.map(x => {
        if (x > limit) return power
        else return x 
    })

    
    // 합 구하기
    let sum = 0
    
    filterdDivisor.map(x => sum+= x)
    
    return sum
}