function solution(box, n) {
    let [a,b,c] = box
    
    let row = Math.floor(a / n)
    let col = Math.floor(b / n)
    let height = Math.floor(c / n)

    return row * col * height
    
}