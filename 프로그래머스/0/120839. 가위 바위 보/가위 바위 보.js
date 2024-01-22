function solution(rsp) {
    
    let arr = rsp.split('')
    
    let result = ''
    
    for (let item of arr){
        if (item === '2'){
            result += '0'
        }else if (item === '0'){
            result += '5'
        }else{
            result += '2'
        }
    }
    
    return result
}