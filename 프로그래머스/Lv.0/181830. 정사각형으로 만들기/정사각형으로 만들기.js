function solution(arr) {
    let row = arr.length;
    let col = arr[0].length;
    
    if (row > col){
        const gab = Array(row-col).fill(0)
        return arr.map(a => [...a, ...gab])
        
    }else if (row < col){
        for(let i = row; i < col; i++){
            arr.push(new Array(col).fill(0))
        }
    }
    
    return arr
}