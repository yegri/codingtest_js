function solution(s) {
    let answer = s.split('').filter(x => Number(x) >= 0)
    
    console.log(answer)
    
    return (s === answer.join('') && s.length === 4) || (s === answer.join('') && s.length === 6) ? true : false
}