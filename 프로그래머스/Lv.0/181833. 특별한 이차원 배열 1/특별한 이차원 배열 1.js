function solution(n) {
    
     // 먼저 n행인 1차원 배열 만들기
     let arr = new Array(n);
    
    // 반복문을 사용해 n행의 2차원 배열 만들기
     for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
         
         for (let j = 0; j < n; j++){
            arr[i][j] = i === j ? 1 : 0 
         }
    }
    
    return arr;
}