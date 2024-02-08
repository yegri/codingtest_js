function solution(n)
{
    var answer = 0;

    String(n).split('').map(x => answer += Number(x))

    
    return answer;
}