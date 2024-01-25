function solution(my_string) {
    let result = my_string.replace(/[^0-9]/g, '')
    
    let answer = result.split('').sort((a,b)=> a - b)
    
    return answer.map(x => Number(x))
}