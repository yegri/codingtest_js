function solution(people, limit) {
    let answer = 0;
    
    let sortedPeople = people.sort((a,b) => a - b)
    
    while(sortedPeople.length !== 0){
        // 가장 가벼운 것과 가장 무거운 것을 같이 넣기 시도
        if (sortedPeople[0] + sortedPeople[sortedPeople.length - 1] <= limit){
            answer++
            sortedPeople.shift()
            sortedPeople.pop()
        // 같이 넣는 게 안 된다면 무거운 것을 넣기 시도
        }else{
            answer++
            sortedPeople.pop()
        }
    }
    
    return answer;
}