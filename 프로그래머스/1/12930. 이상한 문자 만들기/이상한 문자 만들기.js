function solution(s) {
    let arr = s.split(' ')
    let result = []
    
    for (let item of arr){
        let answer = ''
        
        item.split('').map((x,i) => {
            if (i % 2 === 0){
                answer += x.toUpperCase()
            }else{
                answer += x.toLowerCase()
            }
        })

        result.push(answer)
    }
    
    return result.join(' ')
    
}