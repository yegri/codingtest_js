function solution(numbers) {
    let arr = []
    let filterdArr = []
    
    for(let i = 0; i <= 9; i++){
        arr.push(numbers.includes(i))
    }
    
    arr.filter((x,i) => {
        if (x === false){
            filterdArr.push(i)
        }
    })
    
    return filterdArr.reduce((acc,cur)=> acc + cur)
    
}