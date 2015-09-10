// use a var to store created regex
//global variables

var search = {
	
	regex: [],
	
	upWhich: function(letter, flag){
	search.regex.push(new RegExp(letter, flag));
	},
	
	repUpper: function(x,i) {
	var repVar = x.replace(search.regex[i], function(n){
		return n.toUpperCase();
	});
		console.log(repVar);
	},
	
	upAll: function(x, sentence, n){
		this.upWhich(x,"gi");
		this.repUpper(sentence,n);
	}
	
};

// Search for all instances of the letter 'a' case-insensitive
search.upWhich("[^a]","gi");
function countLetr(a){
   return a.replace(search.regex[0], "").length;
    
};

// Find the first non-repeating character in a string and return it

// First attempt, iterates over every character so not super efficient

var test = "ABCCA";


function findTheFirst(string){
    var char = {};
    for(var i = 0; i < string.length; i++){
        if(char[string[i]]){
            char[string[i]] = '0';
        } else {
            char[string[i]] = '1';
        }
    }    
    for(var j = 0; j < string.length; j++){
        if(char[string[j]] === '1'){
          return string.charAt(j);      
        }
    }

    return 'None to return';
}

// Refactor of the above to search front and back as well as not look over duplicates

// Need to do this later using .indexOf() and .lastIndexOf()

// create the forEach method on the String object

String.prototype.forEach = function(callback){

    for(var i = 0; i < this.length; i++){
        callback(this[i], i, this);
            
    }

};