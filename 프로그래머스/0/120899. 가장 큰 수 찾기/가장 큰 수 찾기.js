function solution(array) {
    const maxNum = Math.max.apply(null,array)
    const maxNumIdx = array.indexOf(maxNum)
    
    return [maxNum, maxNumIdx]
}