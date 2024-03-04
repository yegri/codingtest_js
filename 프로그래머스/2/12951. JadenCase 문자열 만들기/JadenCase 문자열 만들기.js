function solution(s) {
    let str = s.split(' ')
    let answer = []

    for(let i = 0; i < str.length; i++){
       let result = ''
       
       for (let j = 0; j < str[i].length; j++) {
            if (j === 0) {
                result += str[i][j].toUpperCase();
            } else {
                result += str[i][j].toLowerCase();
            }
        }
        
        answer.push(result);
    }

    
    return answer.join(' ')
}