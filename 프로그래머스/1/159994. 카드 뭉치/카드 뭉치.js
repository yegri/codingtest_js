function solution(cards1, cards2, goal) {
    // cards1과 cards2에 이용할 순서
    let idx1 = 0
    let idx2 = 0
    
    // goal로 for문을 돌려 모든 단어를 확인
    for (let word of goal){
        
        // 현재 들어온 단어가 cards1에 idx1 순서에 있다면
        // idx1을 1 증가시키고 넘어감
        if (cards1[idx1] === word) idx1++
        
        // cards1 현재 순서에 단어가 같지 않다면
        // cards2 현재 순서의 단어와 같은지 확인
        // 현재 순서에 있다면 idx2를 1 증가시키고 넘어감
        else if (cards2[idx2] === word) idx2++
        
        // cards1과 cards2의 순서에 단어가 다 다르다면
        // 문장을 만들 수 없으므로 No 반환
        else return 'No'
    }
    
    
    // for문을 통과했으면 문장을 만든 것이므로 Yes 반환
    return 'Yes'
}