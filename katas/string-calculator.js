var assert = require('assert');

var numbers = {
	"zero": 0,
	"one": 1,
	"two": 2,
	"three": 3,
	"four": 4,
	"five": 5,
	"six": 6,
	"seven": 7,
	"eight": 8,
	"nine": 9,
	"ten": 10,
	"eleven": 11,
	"twelve": 12,
	"thirteen": 13,
	"fourteen": 14,
	"fifteen": 15,
	"sixteen": 16,
	"seventeen": 17,
	"eightteen": 18,
	"nineteen": 19,
	"twenty": 20
};

function plus(A, B){
	return numbers[A] + numbers[B];
};


it('should add one and purple', function(){
	assert.equal(plus("one", "purple"), NaN);
})
	
it('should add zero and one', function(){
	assert.equal(plus("zero", "one"), 1);
});

it('should add three and four', function(){
	assert.equal(plus("three", "four"), 7);
});

it('should add eleven and nine', function(){
	assert.equal(plus("eleven", "nine"), 20);
});

console.log(plus("three", "two"));
console.log(plus("seven", "one"));
console.log(plus("four", "three"));
console.log(plus("twentytwo", "one"));



