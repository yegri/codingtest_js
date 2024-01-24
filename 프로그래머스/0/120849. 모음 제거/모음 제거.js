function solution(my_string) {
    let al = ['a', 'e', 'i', 'o', 'u']
    
    let answer = my_string.split('').filter(x => !al.includes(x))
    
    return answer.join('')
}