function solution(t, p) {
    let count = 0
    
    for (let i = 0; i < t.length; i++){
        let result = t.split('').splice(i, p.length).join('')
        
        if (result <= p && result.length === p.length){
            count++
        }
    }
    
    return count
}