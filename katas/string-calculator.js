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

function minus(A, B){
	return numbers[A] - numbers[B];
};

function toNum(A){
	return numbers[A];
}



it('should add one and eight', function(){
	assert.equal(plus("one", "eight"), 9);
});
console.log(plus("one", "eight"));	

it('should add zero and one', function(){
	assert.equal(plus("zero", "one"), 1);
});
console.log(plus("zero", "one"));

it('should add three and four', function(){
	assert.equal(plus("three", "four"), 7);
});
console.log(plus("three", "four"));

it('should add eleven and nine', function(){
	assert.equal(plus("eleven", "nine"), 20);
});
console.log(plus("eleven", "nine"));



it('should subtract ten from eleven', function(){
	assert.equal(minus("eleven", "ten"), 1);
});
console.log(minus("eleven", "ten"));

it('should subtract five from sixteen', function(){
	assert.equal(minus("sixteen", "five"), 11);
});
console.log(minus("sixteen", "five"));



it('should multiply fourteen and fifteen', function(){
	assert.equal(toNum("fourteen") * toNum("fifteen"), 210);
})
console.log(toNum("fourteen") * toNum("fifteen"));

it('should divide sixteen by four', function(){
	assert.equal(toNum("sixteen") / toNum("four"), 4);
});
console.log(toNum("sixteen") / toNum("four"));

it('should subtract five from eleven', function(){
	assert.equal(toNum("eleven") - toNum("five"), 6);
});
console.log(toNum("eleven") - toNum("five"));

it('should return the result of twelve % five', function(){
	assert.equal(toNum("twelve") % toNum("five"), 2);
});
console.log(toNum("twelve") % toNum("five"));

it('should return the result of nineteen * seventeen * twenty', function(){
	assert.equal((toNum("nineteen") * toNum("seventeen")) * toNum("twenty"), 6460);
});
console.log(toNum("nineteen") * toNum("seventeen") * toNum("twenty"));


//this is kinda hacky i think, but it totally works
console.log(("twentytwo").substring(0, 6));

function moreNums(A){
	if (A.substring(0, 6) === "twenty") {
		return 20 + toNum(A.substring(6, 11));
	}
	if (A.substring(0, 6) === "thirty") {
		return 30 + toNum(A.substring(6, 11));
	}
};

it('should return 29 for twentynine', function(){
	assert.equal(moreNums("twentynine"), 29);
});
console.log(moreNums("twentynine"));

it('should return 34 for thirtyfour', function(){
	assert.equal(moreNums("thirtyfour"), 34);
});
console.log(moreNums("thirtyfour"));
