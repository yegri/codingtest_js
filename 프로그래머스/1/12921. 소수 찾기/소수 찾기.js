function solution(n) {
    // 에라토스테네스의 체
    
    let answer = 0
    
    // index 0이 존재하므로 배열을 num + 1로 만듦
    const arr = new Array(n+1).fill(true)
    
    // 배열의 index 0과 1은 소수가 아니므로 false로 만듦
    arr[0] = false
    arr[1] = false
    
    // 제곱근까지만 반복
    for(let i = 2; i * i <= n; i++){
       if (arr[i]) {
           
           // 반복을 i * i부터 시작하는 것은 그 이전의 값은 j이전의 수에서 이미 확인했기 때문
           for (let j = i * i; j <= n; j += i){
               
               // 배수이므로 소수가 아닌 것으로 만듦
               arr[j] = false
           }
       }
    }
    
    // filter로 arr중 값이 true인 것의 개수를 구함
    return arr.filter(el => el).length
}