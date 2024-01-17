function solution(n) {
    let arr = []
    let num = 1
    
    while (num <= n){
        arr.push(num)
        num += 2
    }
    
    return arr
}