function solution(X, Y) {
    let answer = ''

    // 길이 10, 0으로 초기화된 두 배열
    const hashX = new Array(10).fill(0)
    const hashY = new Array(10).fill(0)
    
    // 원본 문자열로 인덱스에 접근하여 개수 카운팅
    X.split('').forEach(item => hashX[item]++)
    Y.split('').forEach(item => hashY[item]++)
    
    // 배열 반복하며 겹치는 개수만큼 answer에 추가
    hashX.forEach((x,i) => {
        if (x && hashY[i]){
            answer += String(i).repeat(Math.min(hashX[i], hashY[i]))
        }
    })

    // 공백이 아니면서 0으로만 이루어진 경우 0리턴
    if (answer !== '' && +answer === 0) return '0'
    
    // 그 외에 정답 혹은 -1 리턴
    return answer.length ? [...answer].reverse().join('') : '-1'
}