function solution(a, b) {
    let arr = [a,b]
    
    let sortedArr = arr.sort((x,y) => x - y)
    
    let sum = 0
    
    for(let i = sortedArr[0]; i <= sortedArr[1]; i++){
        sum += i
    }
    
    return sum
}