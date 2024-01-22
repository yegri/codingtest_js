function solution(letter) {
   let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'}
    
    let newLetter = letter.replace(/\s/g, " ").split(' ')
    
    let answer = []
    
    newLetter.filter((x) => answer.push(morse[x]))
    
    return answer.join('')
}