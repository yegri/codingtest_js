function solution(a, b) {
    
    // BigInt : 길이의 제약 없이 정수를 다룰 수 있게 해주는 숫자형
    // Number나 ParseInt를 쓰면 특정 길이 이상이 되면 내림 처리 되는 현상 발생
    
    return (BigInt(a) + BigInt(b)).toString();
}