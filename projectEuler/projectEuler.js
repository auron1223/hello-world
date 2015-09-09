// Not actually a project Euler problem
// Instructions:
// write a loop to console.log all of the 
// even numbers between 1 and 100
// if odd do nothing


var evenOnly = function () {
    for(var i = 1; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

// The famous Fizz buzz challenge

var fizzBuzz = function (i) {
     if (i % 15 === 0) {         // if multiple of 3 && 5
       console.log("Fizz buzz"); //  Fizz buzz
   } else if (i % 3 === 0) {     // if multiple of 3
       console.log("Fizz");      // Fizz
   } else if (i % 5 === 0) {     // if multiple of 5
       console.log("buzz");      // buzz
   }

}

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
