function solution(x) {
    let arr = (x + '').split('')
    let sum = 0
    
    arr.map(x => sum += Number(x))
    
    return x % sum === 0 ? true : false
}