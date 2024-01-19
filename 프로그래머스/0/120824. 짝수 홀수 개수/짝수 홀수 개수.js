function solution(num_list) {
    let even = [];
    let odd = [];
    
    num_list.map((x,i)=>{
        x % 2 === 0 ? even.push('x') : odd.push(x)
    })
    
    let answer = [even.length, odd.length]
    
    return answer;
}