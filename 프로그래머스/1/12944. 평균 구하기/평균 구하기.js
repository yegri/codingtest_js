function solution(arr) {
    var answer = 0;
    
    arr.map(x => answer += x)
    
    return answer / arr.length;
}