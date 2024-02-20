function solution(n, arr1, arr2) {
    const newArr1 = arr1.map(x => x.toString(2).padStart(n, '0'))
    const newArr2 = arr2.map(x => x.toString(2).padStart(n, '0'))
    
    const answer = []


    for(let i = 0; i < newArr1.length; i++){
        let result = ''

        for(let j = 0; j < newArr1.length; j++){
            if(newArr1[i][j] === '0' && newArr2[i][j] === '0') result += ' '
            if(newArr1[i][j] === '1' || newArr2[i][j] === '1') result += '#'
        }
        
        answer.push(result)
    }
    
    return answer
}