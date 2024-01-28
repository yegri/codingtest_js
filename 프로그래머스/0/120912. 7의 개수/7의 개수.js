function solution(array) {
    let str = array.join('')
    let sum = 0
    
    for (let item of str){
        if(item === '7'){
            sum++
        } 
    }
    
    return sum
}