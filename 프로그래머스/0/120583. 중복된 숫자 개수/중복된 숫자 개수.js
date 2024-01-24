function solution(array, n) {
    let count = 0
    
    array.map((x) => {
        if (x === n){
            count++
        }
    })
    
    return count
}