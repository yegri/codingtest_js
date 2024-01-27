function solution(s) {
    let obj = [...s].reduce((prev, cur) =>{
        prev[cur] = ++prev[cur] || 1
        
        return prev
    },{})
    
    let one = Object.keys(obj).filter(x => obj[x] === 1)
    
    return one.sort().join('')
}