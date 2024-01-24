function solution(n) {
    let count = 2
    
    for(let i = 1; i < n; i++){
        if (i * i === n){
            count = 1
        }
    }
    
    return count
}