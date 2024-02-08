function solution(board) {
    const arr = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0))
    
    board.forEach((row, i) => {
        row.forEach((el, j) => {
            if (el === 1){
                const neighbors = [
                    [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
                    [i, j - 1], [i, j], [i, j + 1],
                    [i + 1, j - 1], [i + 1, j], [i + 1, j + 1]
                ]
                
                neighbors.forEach(([x,y])=> {
                    if (x >= 0 && x < board.length && y >= 0 && y < row.length){
                        arr[x][y]++
                    }
                })
            }
        })
    })
    
    return [].concat(...arr).filter((v) => !v).length
}