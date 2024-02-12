function solution(num) {
    let count = 0
    let newNum = num
    
    while(newNum > 1){
        if (newNum % 2 === 0){
            newNum = newNum / 2
            count++
        }else{
            newNum = newNum * 3 + 1
            count++
        }
    }
    
    return num === 1 ? 0 : count >= 500 ? -1 : count
}