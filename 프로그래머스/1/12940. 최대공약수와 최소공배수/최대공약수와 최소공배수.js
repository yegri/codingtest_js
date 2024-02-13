function solution(n, m) {
    let gcd = 0
    
    for(let i = 1; i <= m; i++){
        if (m % i === 0 && n % i === 0){
            gcd = i
        }
    }
    
    // 최소공배수: 두 수를 곱한 값을 최대공약수로 나눈 수
    let lcm = n * m / gcd
    
    return [gcd, lcm]
}