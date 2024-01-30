function solution(numbers) {
    let eng = ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    for(let i = 0; i < eng.length; i++){
        
        // eng[i]에 해당하는 것을 i로 바꿔줌
        numbers = numbers.replaceAll(eng[i],i)
    }
    
    return +numbers
}