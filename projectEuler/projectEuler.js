// Project Euler # 1
// Find the sum of all the multiples of 3 or 5 below 1000
var answer = 0;
var i = 0;
var sumMultiples = function() {
    while(i < 1000){
        if(i % 3 === 0 || i % 5 === 0){
            answer += i;
        }
    }
}

console.log(answer);
