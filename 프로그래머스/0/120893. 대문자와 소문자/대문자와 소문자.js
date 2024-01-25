function solution(my_string) {
    let answer = []
    
    my_string.split('').map((x)=>{
        if (x >= 'a'){
           answer.push(x.toUpperCase())
        }else if(x >= 'A'){
            answer.push(x.toLowerCase())
        }
    })
    
    return answer.join('')
}