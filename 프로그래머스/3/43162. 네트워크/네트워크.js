function solution(n, computers) {
    let answer = 0;
    const length = computers.length
    // 방문 여부 체크
    const visited = Array.from({length : n}, () => false)
    
    function dfs(index){
        // 현재 인덱스 방문처리
        visited[index] = true
        
        for (let i = 0; i < length; i++){
            // 컴퓨터와 연결되어있고 방문하지 않았으면
            // 다시 재귀 --> 방문 진행
            if (computers[index][i] && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for (let i = 0; i < length; i++){
        // 방문하지 않았다면 인덱스 넘겨주면서 dfs함수 호출
        if (!visited[i]){
            dfs(i)
            answer++
        }
    }
    
    return answer;
}