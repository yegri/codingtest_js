const pair = {
    '}' : '{',
    ']' : '[',
    ')' : '('
}

function solution(s) {
   const arr = s.split('')
   let result = 0
   
   const isValid = arr => {
       const stack = []
       
       for (let i = 0; i < arr.length; i++){
           const c = arr[i]
           
           // 스택에 한 글자씩 넣되
           if (pair[c] === undefined) {
               stack.push(c)
           }else{
               // 1, 2와 같은 경우가 발생하면 올바른 괄호 문자열이 아님
               // 1. 닫는 괄호가 나왔을 때 스택의 맨 위 요소와 짝을 이루지 못하는 경우
               if (stack[stack.length - 1] !== pair[c]) return false
               
               // 짝이 맞는 괄호가 나오면 해당 괄호들을 꺼내서 없앰
               stack.pop()
           }
       }
       
       // 2. 모든 문자를 처리한 후 스택에 남은 문자가 있는 경우
       if (stack.length) return false
       return true
   }
   
   for (let i = 0; i < s.length; i++){
       // 올바른 문자열이라면 +1
       if (isValid(arr)) result++
       
       // 문자열 한 칸씩 옆으로 돌리기
       arr.push(arr.shift())
   }
    
    return result
}