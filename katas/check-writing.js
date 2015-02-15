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

function toEnglish(n){
	return numbers[n]
};

it('should return eleven for 11', function(){
	assert.equal(toEnglish(11), "eleven");
});
console.log(toEnglish(11));

it('should return nineteen for 19', function(){
	assert.equal(toEnglish(19), "nineteen");
});
console.log(toEnglish(19));

var amount = "1234.51"
console.log((amount.slice(-2)) +"/100");