function solution(s1, s2) {
   let arr = s1.filter(x => s2.includes(x))
   
   return arr.length
}