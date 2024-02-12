function solution(price, money, count) {
    let newPrice = 0
    let pay = 0
    
    for(let i = 1; i <= count; i++){
        newPrice = price * i
        
        pay += newPrice
    }
    
    return pay > money ? pay - money : 0
}