function solution(n) {
    let str = String(n)
    let sum = 0
    
    for (let item of str){
        sum += Number(item)
    }
    
    return sum
}