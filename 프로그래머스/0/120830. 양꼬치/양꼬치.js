function solution(n, k) {
    let service = Math.trunc(n / 10)
    
    return 12000 * n + 2000 * k - service * 2000
}