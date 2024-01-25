function solution(numbers) {
    numbers.sort((a,b) => b - a)
    
    let answer = 1
    const minus = numbers.filter(x => x < 0).length
    
    if (minus >= 2 && (numbers[numbers.length-1] * numbers[numbers.length-2] > numbers[0] * numbers[1] )){
        answer = numbers[numbers.length-1] * numbers[numbers.length-2]
    }else{
        answer = numbers[0] * numbers[1]
    }
    
    console.log(numbers)
    
    return answer
}