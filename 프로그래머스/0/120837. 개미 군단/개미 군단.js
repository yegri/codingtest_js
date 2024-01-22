function solution(hp) {
    const general = 5
    const soldier = 3
    const ergate = 1
    
    const count1 = Math.trunc(hp / general)
    
    const count2 = Math.trunc((hp % general) / soldier)

    const count3 = Math.trunc((hp % general) % soldier / ergate)
    
    
    if ((hp % general) % soldier !== 0){
        return count1 + count2 + count3
    }else{
        return count1 + count2
    }
    
   
}