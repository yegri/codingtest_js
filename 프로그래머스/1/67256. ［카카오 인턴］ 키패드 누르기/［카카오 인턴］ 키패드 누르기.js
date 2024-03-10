function solution(numbers, hand) {
    let answer = []
    let leftHandPosition = '*'
    let rightHandPosition = '#'
    
    numbers.forEach((num) => {
        if (num === 1 || num === 4 || num === 7){
            answer.push('L')
            leftHandPosition = num
            return
        }
        
        if (num === 3 || num === 6 || num === 9){
            answer.push('R')
            rightHandPosition = num
            return
        }
        
        // 2, 5, 8, 0 중 하나를 눌렀을 경우
        // 이전에 눌렀던 값(leftHandPosition, rightHandPosition)과
        // 현재 누른 값(target) 사이의 거리 구하기
        const leftHandDistance = getDistance(leftHandPosition, num)
        const rightHandDistance = getDistance(rightHandPosition, num)
        
        // 거리 같을 때
        if (leftHandDistance === rightHandDistance) {
          if (hand === "right") {
            answer.push("R");
            rightHandPosition = num;
            return;
          } else {
            answer.push("L");
            leftHandPosition = num;
            return;
          }
        }

        if (leftHandDistance > rightHandDistance) {
          answer.push("R");
          rightHandPosition = num;
        } else {
          answer.push("L");
          leftHandPosition = num;
        }
     });
        return answer.join('')
    }
    
    const getDistance = (locatedNumber, target) => {
        const keyPad = {
            1 : [0,0],
            2 : [0,1],
            3 : [0,2],
            4 : [1,0],
            5 : [1,1],
            6 : [1,2],
            7 : [2,0],
            8 : [2,1],
            9 : [2,2],
            "*" : [3,0],
            0 : [3,1],
            "#" : [3,2]
        }
        
        const nowPosition = keyPad[locatedNumber]
        const targetPosition = keyPad[target]
        
        return (
            Math.abs(targetPosition[0] - nowPosition[0]) +
            Math.abs(targetPosition[1] - nowPosition[1])
        )
    }
    
