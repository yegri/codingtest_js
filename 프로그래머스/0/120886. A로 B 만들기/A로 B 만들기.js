function solution(before, after) {
    let arr1 = [...before].sort()
    let arr2 = [...after].sort()
    
    return arr1.join('') === arr2.join('') ? 1 : 0
}