function solution(numbers) {
   let sum = numbers.reduce((acc, sum) => {
        return acc + sum
    })
   
   return sum / numbers.length
}
