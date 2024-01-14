function solution(arr, k) {
    let newArr = arr.map((x,i) =>{
        return k % 2 !== 0 ? x * k : x + k
    })
    
    return newArr
}