function solution(myString) {
    let newStr = ''
    
    for (let str of myString){
        str = str < 'l'? 'l' : str
        newStr += str
    }
    
    return newStr
}