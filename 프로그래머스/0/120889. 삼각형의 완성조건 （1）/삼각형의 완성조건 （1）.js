function solution(sides) {
    let [a,b,c] = sides.sort((a,b) => b-a)
    
    return a < b + c ? 1 : 2
}