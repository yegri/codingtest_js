function solution(babbling) {
    let answer = 0
    
    // ye, aya, woo, ma에 해당하는 부분을 공백으로 바꿔줌
    // trim으로 공백을 제거한 뒤 빈 문자열이 되면 -> 조카가 발음할 수 있는 단어 -> 1 더해줌
    for (let i = 0; i < babbling.length; i++){
        if (babbling[i].replace("ye"," ").replace("aya"," ").replace("woo"," ").replace("ma"," ").trim() === ""){
            answer++
        }
    }
    
    return answer
}