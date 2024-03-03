function solution(keymap, targets) {
    const answer = []
    const map = new Map()
    
    for (const key of keymap) {
        
        // 1. map 객체에 key가 없거나
        // 2. 문자를 누른 횟수가 기존에 저장되어 있는 문자의 누른 횟수보다 작다면
        // 문자를 key 값으로, i+1을 value로 저장
        for(let i = 0; i < key.length; i++){
            if (!map.has(key[i]) || i + 1 < map.get(key[i])) map.set(key[i], i + 1)
        }
    }
    
    for (const target of targets) {
        let count = 0
        
        // map객체에 값이 없다면 undefined 저장
        // count값에 더하게 되면 NaN
        for(let i = 0; i < target.length; i++){
            count += map.get(target[i])
        }
        
        // truthy 값이면 count를 push
        // NaN은 falsy 값으로 평가되기 때문에 -1을 answer에 push
        answer.push(count || -1)
        
    }
    
    return answer
}