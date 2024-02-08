function solution(s){
    let countP = 0
    let countY = 0
    
    s.split('').map(x => x.toLowerCase()).map((y) => {
        y === 'p' ? countP += 1 : y === 'y' ? countY += 1 : null
    })
    
    if (countP === countY){
        return true
    }else if (countP !== countY){
        return false
    }else{
        return true
    }
}