function solution(n, m, section) {
    let answer = 0
    let painted = 0
    
    for (let item of section){
        
        // painted가 다시 칠할 구역보다 작으면
        if (painted < item){
            
            // answer 더하기
            answer++
            
            // painted = 페인트 칠한 구역 + 롤러 길이 - 1
            painted = item + m -1
        }
    }
    
    return answer
}