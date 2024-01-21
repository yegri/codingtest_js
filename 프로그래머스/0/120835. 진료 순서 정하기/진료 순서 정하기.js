function solution(emergency) {
    // slice를 사용해 원본 배열의 순서를 변경하지 않고 새로운 배열을 만듦
    let newArr = emergency.slice().sort((a,b)=>b-a)
   
    // newArr에서 x의 인덱스를 찾아서 반환 
    return emergency.map(x => newArr.indexOf(x) + 1)
}