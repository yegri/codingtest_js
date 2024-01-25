function solution(numbers) {
    let N = numbers.length
    numbers.sort((a,b) => b - a)
    
    return Math.max(
        numbers[N-1] * numbers[N-2],
        numbers[0] * numbers[1]
    )
}