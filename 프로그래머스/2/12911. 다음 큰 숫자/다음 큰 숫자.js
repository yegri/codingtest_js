function solution(n) {
    const bin = n.toString(2)
    
    const countZero = bin.split('').filter(x => x === '1').length
    
    let answer = 0
    
    for(let i = n + 1; i <= 1000000; i++){
        let result = i.toString(2).split('').filter(x => x === '1').length

        if (result === countZero) {
            answer = i
            break
        }
    }
    
    return answer
}