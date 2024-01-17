function solution(array) {
    let newArr = array.sort((a,b)=> a - b)
    
    const result = Math.floor(newArr.length / 2)
    
    return newArr[result]
}