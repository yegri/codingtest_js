function solution(food) {
    let answer = ''
    
    // 물을 제외하고 음식부터 시작
    for(let i = 1; i < food.length; i++){
        answer += String(i).repeat(Math.floor(food[i] / 2))
    }
    
    return answer + "0" + [...answer].reverse().join('')
}