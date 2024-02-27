function solution(babbling) {
    const words = ['aya','ye','woo','ma'];
    let count = 0
    
    for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i]
        
        for(let j = 0; j < words.length; j++){
            
            // 말할 수 있는 단어가 2번이상 반복된다면 발음할 수 없으므로 다음 단어로 넘어감
            if(babble.includes(words[j].repeat(2))){
                break;
            }
            
            babble = babble.split(words[j]).join(' ')
        }
        
        // 재조합한 문자의 길이가 0이 아니라면 배열 words 내에 들어있는 원소 외에 다른 문자가 포함된 것
        // 길이가 0인 단어들만 발음 가능
        if(babble.split(' ').join('').length === 0){
            count++
        }
    }
    
    return count
}