function solution(ingredient) {
    let answer = 0
    const part = []
    
    for(let i = 0; i < ingredient.length; i++){
        part.push(ingredient[i])
        
        // part에 있는 값이 '1231'과 일치하면 answer 증가시키고 part에서 데이터 지우기
        if(part.slice(-4).join('') === '1231'){
            part.splice(-4)
            answer++
        }
    }
    
    return answer
}