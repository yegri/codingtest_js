function solution(nums) {
    let set = new Set(nums)
    let arr = [...set]
    let answer = 0
    
    if (arr.length >= nums.length/2){
        answer = nums.length/2
    }else{
        answer = arr.length
    }
    
    return answer
}