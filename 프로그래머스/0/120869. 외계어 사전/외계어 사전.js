function solution(spell, dic) {
    let answer = []
       
    for(let item of dic){
        let arr = []
        
        for(let i = 0; i < spell.length; i++){
            arr.push(item.includes(spell[i]))
        }
        
        answer.push(arr)
    }
    
    return answer.filter(x => !x.includes(false)).length > 0 ? 1 : 2
}