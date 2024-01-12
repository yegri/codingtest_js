function solution(strArr) {
    let arr = []
    
    for (let str of strArr){
       arr.push(str.length)
    }
    
    const result = {};
    
    arr.forEach((x) => { 
      result[x] = (result[x] || 0)+1; 
    });
    
    let arr2 = Object.keys(result).map(function (key) { return result[key]; });
    let max = Math.max.apply(null, arr2);
    
    return max
   
}