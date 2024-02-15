function solution(s, n) {
    let arr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let arr2 = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    
    let answer = []
    let idx = []

    s.split('').map((x) => {
        if (x >= 'a'){
            idx.push(arr1.indexOf(x) + n)
        }else{
            idx.push(arr2.indexOf(x) + n)
        }
    })
    
    idx.map((z,i) => {

        if (s[i] >= 'a'){
            answer.push(arr1[z])
        }
        if (s[i] >= 'A' && s[i] < 'a'){
            answer.push(arr2[z])
        }
        
        if (s[i] === ' '){
            answer.push(' ')
        }
    })
    
    return answer.join('')

}