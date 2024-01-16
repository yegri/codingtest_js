// 유클리드 호제법을 이용하여 최대공약수 구하기
const cal_gcd = (a, b) => b ? cal_gcd(b, a % b) : a;

function solution(numer1, denom1, numer2, denom2) {
    // 분자 구하기
    let numer = numer1 * denom2 + numer2 * denom1;
    
    // 분모구하기
    let denom =  denom1 * denom2;
    
    // 최대공약수
    let gcd = cal_gcd(numer, denom);
    
    // 최대 공약수를 분자 분모에 나누고 배열에 넣기
    return [numer / gcd, denom / gcd]
}