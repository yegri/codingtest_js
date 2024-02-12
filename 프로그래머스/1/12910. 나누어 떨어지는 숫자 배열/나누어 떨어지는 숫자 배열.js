function solution(arr, divisor) {
    const newArr = arr.filter(x => !(x % divisor))
    
    return newArr.length === 0 ? [-1] : newArr.sort((a,b)=>a-b)
}