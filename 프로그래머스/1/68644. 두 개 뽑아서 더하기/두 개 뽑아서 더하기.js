function solution(numbers) {
    const tmp = []
    const answer = []
    
    const backtrack = (cur) => {
        if(tmp.length === 2){
            answer.push(tmp[0] + tmp[1])
            return
        }
        
        for(let i = cur; i < numbers.length; i++){
            tmp.push(numbers[i])
            backtrack(i+1)
            tmp.pop()
        }
    }
    
    backtrack(0)
    
    const set = new Set(answer)
    
    return [...set].sort((a,b)=>a-b)
}