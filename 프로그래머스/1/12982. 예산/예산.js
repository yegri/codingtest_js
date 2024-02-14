function solution(d, budget) {
    let sortedArr = d.sort((a,b) => a - b)
    let sum = 0
    let arr = []
    
    for(let i = 0; i < sortedArr.length; i++){
        if (sum + sortedArr[i] <= budget){
            sum += sortedArr[i]
            arr.push(sortedArr[i])
        }else{
            break
        }
    }
    
    return arr.length
}