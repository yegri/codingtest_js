function solution(order) {
    const game = [3,6,9]
    
    let arr = String(order).split('')
    
    let answer = arr.filter(x => game.includes(Number(x)))
    
    return answer.length
}