function solution(brown, yellow) {
    let answer = [];
    const sum = brown + yellow
    
    // 카펫의 최소 높이는 3
    for(let height = 3; height <= brown; height++){
        // 임의의 높이로 나눌 때 나머지가 없을 경우에만
        if (sum % height === 0){
            
            // 가로길이
            let width = sum / height
            
            // 테두리를 제외한 길이를 구해야하기 때문에 각각 -2 해준 뒤 곱셈
            // 결과가 yellow와 같다면 해당 높이와 길이 리턴
            if ((height - 2) * (width - 2) === yellow){
                return [width, height]
            }
        }
    }
    
    return answer
}