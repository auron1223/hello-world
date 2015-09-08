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
    
}