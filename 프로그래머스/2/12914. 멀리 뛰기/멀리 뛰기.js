function solution(n) {
    if (n === 1 || n === 2) return n
    
    // 연산 결과를 저장할 1차원의 배열
    const dp = Array(n).fill(0)
    const mod = 1234567
    
    // n이 1 일 때 경우의 수인 1과 n이 2일 때 경우의 수인 2를 배열의 가장 처음에 설정
    dp[0] = 1
    dp[1] = 2
    
    for(let i = 2; i < n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % mod
    }
    
    return dp[n-1]
}