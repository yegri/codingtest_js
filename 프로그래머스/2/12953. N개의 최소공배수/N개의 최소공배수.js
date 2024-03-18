// 최대공약수 구하기
function getGcd(a, b) {
    if (b === 0) return a
    return getGcd(b, a % b)
}

function solution(arr) {
    // 최소공배수 구하기
    // 두 수의 최소공배수는 두 수의 곱에서 최대약수를 나눈 값과 같음
    return arr.reduce((a, b) => (a * b) / getGcd(a, b))
}