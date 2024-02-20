function solution(a, b, n) {
    let answer = 0
    
    // 빈 병 a개 주면 콜라 b병 줌, 보유 중 빈 병 n개 
    while (n >= a){
        let coke = Math.floor(n / a) * b
        let rest = n % a
        n = rest + coke
        answer += coke
    }
    
    return answer
}