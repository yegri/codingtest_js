function solution(s) {
    const arr = s.split(' ') 
    const maxValue = Math.max(...arr)
    const minValue = Math.min(...arr)
    
    return `${minValue} ${maxValue}`
}