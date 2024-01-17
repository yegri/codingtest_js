function solution(array) {
    // prev: 누적된 결과를 나타내는 객체, curr: 현재 처리 중인 배열 요소
    let obj = array.reduce((prev, curr) => {
        
        // prev 객체에 curr 요소가 이미 존재한다면 1 증가시킴, 없다면 1로 초기화
        prev[curr] = ++prev[curr] || 1;
        
    // 누적된 결과 객체 반환
    return prev;
  }, {}); // 초깃값으로 빈 객체 사용
    
    
    // values 중 제일 큰 값 저장
    let maxValue = Math.max(...Object.values(obj))
    
    // 최빈값이 여러 개일 경우 -1 반환
    if (Object.values(obj).filter(item => item === maxValue).length > 1){
        return -1
    }
    
    // 최빈값 찾기
    let answer = Object.keys(obj).find(item => obj[item] === maxValue)
    
    return Number(answer)
}