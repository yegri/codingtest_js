function solution(s) {
    let arr = s.split(' ')
    let arr2 = arr.map((x) =>{
       return x != 'Z'? Number(x) : 'Z'
    })
    
    let sum = 0
    
    for(let i = 0; i < arr2.length; i++){
        if (arr2[i] != 'Z'){
            sum += arr2[i]
        }else{
            sum -= arr2[i-1]
        }
    }
    
    return sum
    
}