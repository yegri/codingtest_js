function solution(array, height) {
    array.sort((a,b) => a - b)
    
    let answer = array.filter(x => x > height)
    
    return answer.length
}