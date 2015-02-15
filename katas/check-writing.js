var assert = require('assert');

var numbers = [ 
	"zero",
	"one", 
	"two", 
	"three", 
	"four", 
	"five", 
	"six", 
	"seven", 
	"eight", 
	"nine", 
	"ten", 
	"eleven", 
	"twelve", 
	"thirteen", 
	"fourteen", 
	"fifteen", 
	"sixteen", 
	"seventeen", 
	"eighteen", 
	"nineteen", 
	"twenty" ]

function tocheck(n){
	return numbers[n]
};

it('should return eleven for 11', function(){
	assert.equal(tocheck(11), "eleven");
});
console.log(tocheck(11));

it('should return nineteen for 19', function(){
	assert.equal(tocheck(19), "nineteen");
});
console.log(tocheck(19));