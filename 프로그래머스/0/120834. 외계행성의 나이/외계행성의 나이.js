function solution(age) {
    let strAge = age + '';
    let answer = ''
    
    for(let i = 0; i < 31; i++){
       if (strAge[i] === '0'){
           answer += 'a'
       }else if (strAge[i] === '1'){
           answer += 'b'
       }else if (strAge[i] === '2'){
           answer += 'c'
       }else if (strAge[i] === '3'){
           answer += 'd'
       }else if (strAge[i] === '4'){
           answer += 'e'
       }else if (strAge[i] === '5'){
           answer += 'f'
       }else if (strAge[i] === '6'){
           answer += 'g'
       }else if (strAge[i] === '7'){
           answer += 'h'
       }else if (strAge[i] === '8'){
           answer += 'i'
       }else if(strAge[i] === '9'){
           answer += 'j'
       }else{
           answer += ''
       }
    }
    
    return answer
}