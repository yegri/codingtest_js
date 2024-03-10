function solution(new_id) {
    const step1 = new_id.split('').map(x => x.toLowerCase())
    
    const rgx = /[^a-z\d\-\_\.]/g
    
    const step2 = step1.join('').replace(rgx,'')
    
    const step3 = step2.replace(/\.+/g,'.')
    
    const step4 = step3.replace(/^\.|\.$/g,'')
    
    const step5 = step4.length === 0 ? 'a' : step4
    
    let step6 = step5
    
    if (step5.length >= 16) step6 = step5.slice(0,15).replace(/\.$/g,'')
    
    if (step5.length <= 2) {
        let small = [...step5].pop().repeat(3-step5.length)
        step6 += small
        
    }
    
    return step6
}