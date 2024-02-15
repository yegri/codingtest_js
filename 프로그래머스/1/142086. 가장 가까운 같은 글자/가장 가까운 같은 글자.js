function solution(s) {
    let arr = s.split('').map(x => s.indexOf(x))
    let arr2 = s.split('').map(x => s.lastIndexOf(x))
    let answer = []

    arr.map((x, i) => {
        if (x === i){
            answer.push(-1)
        }else{
            answer.push(i - s.split('').slice(0,i).lastIndexOf(s.split('')[i]))
        }
    })
    
    return answer
}