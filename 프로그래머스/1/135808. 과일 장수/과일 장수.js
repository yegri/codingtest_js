function solution(k, m, score) {
    score.sort((a,b) => b-a)
    let answer = 0
    
    for(let i = 0; i < score.length; i += m){
        let price = []
        price = score.slice(i, i+m)
        
        if(price.length >= m){
            answer += (price[price.length - 1] * m * 1)
        }
    }
    
    return answer
}