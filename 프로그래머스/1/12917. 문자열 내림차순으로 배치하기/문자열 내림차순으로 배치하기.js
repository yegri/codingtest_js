function solution(s) {
    let arr = s.split('')
    
    return arr.sort((a, b) => a > b ? -1 : 1).join('')
}