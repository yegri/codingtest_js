function solution(N, stages) {
    let answer = []
    
    // 실패한 사람을 제외하기 위해서
    let people = stages.length
    
    for(let i = 1; i <= N + 1; i++){
        // 각 스테이지에 실패한 사람들만 추출
        let tmp = stages.filter(n => n === i).length
        
        // [스테이지, 실패율]
        answer.push([i, tmp / people])
        
        // 실패한 사람 제외
        people -= tmp
    }
    
    // 마지막은 모두 깬 사람들이므로 제거
    answer.pop()
    
    answer = answer.sort((a,b) => b[1] - a[1])
    
    return answer.map(x => x[0])
}