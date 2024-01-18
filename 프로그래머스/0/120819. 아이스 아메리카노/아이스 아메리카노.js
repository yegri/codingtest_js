function solution(money) {
    let answer = []
    let price = 5500
    
    let result1 = Math.trunc(money / price)
    answer.push(result1)
    
    let result2 = Math.trunc(money % price)
    answer.push(result2)
    
    return answer
}