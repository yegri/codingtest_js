function solution(bin1, bin2) {
    let bin10 = parseInt(bin1,2)
    let bin20 = parseInt(bin2,2)
    
    const sum = bin10 + bin20
    
    return sum.toString(2)
}