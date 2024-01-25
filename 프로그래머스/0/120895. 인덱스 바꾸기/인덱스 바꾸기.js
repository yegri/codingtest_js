function solution(my_string, num1, num2) {
    let newStr = my_string.split('')
    
    let x = newStr[num1]
    newStr[num1] = newStr[num2]
    newStr[num2] = x
    
    return newStr.join('')
}