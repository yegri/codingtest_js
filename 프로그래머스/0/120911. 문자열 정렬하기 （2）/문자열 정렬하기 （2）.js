function solution(my_string) {
    let arr = my_string.toLowerCase().split('')
    
    return arr.sort().join('')
}