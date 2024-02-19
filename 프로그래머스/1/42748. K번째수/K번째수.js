function solution(array, commands) {
    let [i, j, k] = [0,0,0]
    let answer = []
    
    for (let arr of commands){
        i = arr[0]
        j = arr[1]
        k = arr[2]
        
        let slicedArr = array.slice(i-1,j).sort((a,b)=>a-b)
        
        answer.push(slicedArr[k - 1])
    }
    
    return answer
}