function solution(my_string) {

    let arr = my_string.split(/\D/)
    
    let result = arr.map(x => Number(x))
    
    return result.reduce((acc,cur) => {
        return acc + cur
    },)
}