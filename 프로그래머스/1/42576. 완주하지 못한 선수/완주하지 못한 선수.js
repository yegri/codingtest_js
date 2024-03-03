function solution(participant, completion) {
    let answer = ''
   const myMap = new Map();

    for (const part of participant){
        
        if(!myMap.get(part)){
            // map에 값이 없으면 value에 1 저장
            myMap.set(part, 1);
        }else{
            // 있다면 value에 + 1
            myMap.set(part, myMap.get(part)+1);
        }
    }

    for(const com of completion){
        // 완주자 배열을 반복해 value 1씩 감소
        if(myMap.get(com)){
            myMap.set(com, myMap.get(com)-1);
        }
    }
    
    for(const part of participant){
        // value가 1 이상이면 완주하지 못한 인원이므로 return
        if(myMap.get(part) && myMap.get(part) >=1 ){
            answer = part;
        }
    }
    
    return answer
}