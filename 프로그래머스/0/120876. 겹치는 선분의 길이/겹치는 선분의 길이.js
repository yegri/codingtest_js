function solution(lines) {
    // 최초로 그려지는 선분의 시작점
    const start = Math.min(...lines.flat())
    // 마지막에 그려지는 선분의 종단점
    const end = Math.max(...lines.flat())
    // 차이만큼 0으로 채우기
    const list = [...Array(end-start)].fill(0)
    
    lines.forEach(el => {
        for (let i = el[0]; i < el[1]; i++){
            list[i-start] += 1 // 1씩 더해주기
        }
    })
    
    // 선분들 다 더했을 때 리스트에 2 이상이면 겹친부분
    return list.reduce((a,c) => c > 1 ? a + 1 : a , 0)
}