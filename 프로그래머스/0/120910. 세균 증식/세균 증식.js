function solution(n, t) {
    let count = n
    let time = 1
    
    while(time <= t){
        count += n 
        time++
        n = n * 2
    }
    
    return count
}