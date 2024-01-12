function solution(strArr) {
    // 배열의 길이를 넣어주기 위한 배열 생성
    let arr = []
    
    // 배열 길이 넣어주기
    for (let str of strArr){
       arr.push(str.length)
    }
    
    // 길이 개수 구하기 위한 객체 생성
    const result = {};
    
    
    // 길이 개수 구하기
    arr.forEach((x) => { 
      result[x] = (result[x] || 0)+1; 
    });
    
    // 객체에서 key만 빼내서 새로운 배열 만들기
    let arr2 = Object.keys(result).map(function (key) { return result[key]; });
    
    // 새로운 배열에서 가장 큰 값 찾기
    let max = Math.max.apply(null, arr2);
    
    return max
}