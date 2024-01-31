function solution(score) {
    let arr = []
    
    for(let item of score){
        let [eng, math] = item
        
        arr.push((eng + math) / 2)
    }
    
    let answer = [...arr].sort((a,b) => b - a)
    
    return arr.map(x => answer.indexOf(x) + 1)
}