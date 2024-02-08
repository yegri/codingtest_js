function solution(dots) {
    const [[x1, y1],[x2, y2],[x3, y3],[x4, y4]] = dots
    
    // 1과 2를 연결한 선분과 3과 4를 연결한 선분 기울기 비교
    if ((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1
    
    // 1과 3을 연결한 선분과 2와 4를 연결한 선분 기울기 비교
    if ((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1
    
    // 1과 4를 연결한 선분과 2와 3을 연결한 선분 기울기 비교
    if ((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1
    
    return 0
}