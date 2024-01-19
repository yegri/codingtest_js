const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    let num = Number(line)
    
    for(let i = 1; i <= num; i++){
        input.push(Array(i).fill('*'))
    }
}).on('close', function () {
    input.forEach((x)=>{
        console.log(x.join(''))
    })
});