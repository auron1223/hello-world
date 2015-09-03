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