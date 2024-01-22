function solution(num_list, n) {
    let answer = []
    let arr = []
    
    while(num_list.length) {
        answer.push(num_list.splice(0, n));
    }
    
    
    return answer
}