function solution(x, n) {
    let answer = []
    
    // 끝지점 : answer의 길이가 n일 때까지 반복 
    for(let i = x; answer.length < n; i += x){
        answer.push(i)
    }
    
    return answer
}