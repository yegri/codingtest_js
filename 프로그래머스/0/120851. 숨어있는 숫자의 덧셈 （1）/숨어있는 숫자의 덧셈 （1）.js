function solution(my_string) {
    var regex = /[^0-9]/g;
    
    let result = my_string.replace(regex,"").split('')
    
    let answer = result.reduce((acc,cur) => {
        return Number(acc) + Number(cur)
    })
    
    return answer
}