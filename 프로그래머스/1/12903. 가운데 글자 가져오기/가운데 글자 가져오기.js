function solution(s) {
    let idx = Math.trunc((s.length - 1) / 2)
    
    return s.length % 2 === 0 ? s.split('').splice(idx,2).join('') : s.split('').splice(idx,1).join('')
}