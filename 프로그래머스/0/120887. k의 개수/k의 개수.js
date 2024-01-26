function solution(i, j, k) {
    let arr = ''
    let count = 0
    
    for(let x = i; x <= j; x++){
        arr += String(x)
    }
    
    for(let item of arr){
        if (item === String(k)){
            count++
        }
    }
    
    return count
}