function solution(array, n) {   
    let obj = array.reduce((prev,cur) => {
        prev[cur] = Math.abs(cur - n)
        
        return prev
    },{})
    
    let minValue = Math.min(...Object.values(obj))
    
    let answer = Object.keys(obj).find(item => obj[item] === minValue)
    
    return Number(answer)
}