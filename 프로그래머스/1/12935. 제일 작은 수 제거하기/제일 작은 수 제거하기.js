function solution(arr) {
    const minValue = Math.min(...arr)
    
    const minIdx = arr.indexOf(minValue)
    
    arr.splice(minIdx, 1)
    
    return arr.length === 0 ? [-1] : arr
}