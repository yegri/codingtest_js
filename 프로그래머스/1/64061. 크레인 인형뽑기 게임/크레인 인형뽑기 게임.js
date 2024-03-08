function solution(board, moves) {
    let answer = 0
    const stack = []
    
    moves.forEach((move) => {
        for(let i = 0; i < board.length; i++){
            // 인형을 뽑을 위치에 있는 값 할당
            const item = board[i][move-1]
            
            // item이 0이면 다음 index로 넘김
            if (item === 0) continue
            
            // item이 바구니의 마지막 아이템과 같다면 터트려져 사라져야 함 -> pop()
            // 터트려진 인형의 개수를 구해야 함 -> +2
            if (item === stack[stack.length - 1]) {
                stack.pop()
                answer += 2
            }else {
                // 같지 않다면 넣어주기
                stack.push(item)
            }
            
            // 인형을 뽑았다는 의미 -> 해당 위치에 있는 값을 0으로 교체
            board[i][move-1] = 0
            break
        }
    })
    
    return answer
}