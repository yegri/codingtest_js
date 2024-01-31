function solution(id_pw, db) {
    let answer = ''
    let [id, pw] = id_pw
    
    for(let item of db){
       
        if (id === item[0] && pw === item[1]){
            answer = 'login'

        }else if(id !== item[0] && pw !== item[1]){
            answer = 'fail'
            
        }else if (id === item[0] && pw !== item[1]){
            answer = 'wrong pw'

        }
    }
    
    return answer
}