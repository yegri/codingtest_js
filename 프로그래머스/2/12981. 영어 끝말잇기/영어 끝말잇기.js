function solution(n, words) {
    let answer = [0,0]
    
    const stack = []
    
    for(let i = 0; i < words.length; i++) {
        if(!stack[0]){
            stack.push(words[i])
            continue
        }
        
        // stack에 words의 단어가 있거나 stack의 마지막 단어의 마지막 글자가 해당 단어의 첫글자와 같지 않다면
        if (stack.indexOf(words[i]) !== -1 || stack.at(-1).at(-1) !== words[i][0]){
            // 가장 먼저 탈락한 사람의 번호, 몇 번째 탈락인지 구하기
            answer = [(i+1) % n ? (i+1) % n : n, Math.ceil((i+1) / n)]
            break
        }
        
        // 위 조건문에 해당하지 않을 경우, stack에 값 추가
        stack.push(words[i])
    }
    
    return answer
}