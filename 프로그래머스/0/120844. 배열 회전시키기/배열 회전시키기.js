function solution(numbers, direction) {
    if(direction === 'right') {
        // 배열 맨 끝 값 제거 후 배열 맨 앞에 추가
        numbers.unshift(numbers.pop())
    } else {
        // 배열 맨 앞 값 제거 후 배열 맨 뒤에 추가
        numbers.push(numbers.shift())
    }
    return numbers
}