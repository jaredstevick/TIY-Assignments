var assert = require('assert');

function stringCalc(A, B){
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
		"ten": 10
	};
	return numbers[A] + numbers[B];
};

it('should add one and purple', function(){
	assert.equal(stringCalc("one", "purple"), NaN);
})
	
it('should add zero and one', function(){
	assert.equal(stringCalc("zero", "one"), 1);
});

it('should add three and four', function(){
	assert.equal(stringCalc("three", "four"), 7);
});

console.log(stringCalc("three", "two"));
console.log(stringCalc("seven", "one"));