function solution(s) {
    let answer = [0,0]
    let sLen = 0
    
    while(s.length > 1){
        sLen = s.length
        s = s.split('0').join('')
        answer[0]++
        // 빼는 0개의 개수 저장. sLen과 s의 길이의 차이가 0의 개수!!
        answer[1] += (sLen - s.length)
        s = s.length.toString(2)
    }
    
    return answer
}