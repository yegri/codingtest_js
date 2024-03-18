function solution(n)
{
    let answer = 0

    // 도착지점에서 거꾸로 되감기 한다고 생각
    while(n > 0){
        if (n % 2 === 0){
            n /= 2
        }else{
            n--
            answer++
        }
    }
    
    return answer
}