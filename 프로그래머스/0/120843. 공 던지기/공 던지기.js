function solution(numbers, k) {
    let arr = []
    let count = 1
    let answer = 0

    while(count < numbers.length + k){
        arr.push(...numbers)
        count++
    }
    
    for(let i = 0; i < k * 2; i+=2){
        answer = arr[i]
    }
    
    return answer

}