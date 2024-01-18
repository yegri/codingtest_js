function solution(n) {
    let pizza = 7
    
    // 피자를 최소 1조각씩 먹으려면 n * 1 이 7의 배수
    // 7 % n !== 0 이면 1판씩 추가
    
    if (n % 7 === 0){
        return Math.floor(n / 7)
    }else{
        return Math.floor(n / 7) + 1
    }
    
}