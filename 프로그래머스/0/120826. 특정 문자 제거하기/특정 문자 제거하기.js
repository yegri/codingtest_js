function solution(my_string, letter) {
    let answer = [...my_string].filter((item) => {return item !== letter})
    
    return answer.join('')
}