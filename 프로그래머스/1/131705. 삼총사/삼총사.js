const NUM = 3;

function solution(number) {
    let answer = 0
    const tmp = []
    
    const backtrack = (cur) => {
        // tmp 길이가 3이면 
        if (tmp.length === NUM){
            // tmp의 합을 계산 후 0이면 answer에 1 더하기
            answer += tmp.reduce((a,b)=> a + b) ? 0 : 1
            return
        }
        
        
        for (let i = cur; i < number.length; i++){
            tmp.push(number[i])
            
            // 재귀호출할 때마다 cur을 사용하여 다음 인덱스로 이동
            backtrack(i + 1)
            
            // 다음 경우를 탐색하기 전 현재 요소를 제거
            tmp.pop()
        }
    }
    
    backtrack(0)
    
    return answer
}