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
	"twenty": 20,
	"thirty": 30,
	"forty": 40,
	"fifty": 50,
	"sixty": 60,
	"seventy": 70,
	"eighty": 80,
	"ninety": 90
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


//this is kinda hacky i think, but it totally works.  just grabbing and chopping up a string
console.log(("twentytwo").substring(0, 6));

function moreNums(A){
	if (A.substring(0, 6) === "twenty") {
		return 20 + toNum(A.substring(6, 11));
	}
	if (A.substring(0, 6) === "thirty") {
		return 30 + toNum(A.substring(6, 11));
	}
	if (A.substring(0, 5) === "forty") {
		return 40 + toNum(A.substring(5, 11));
	};
	if (A.substring(0, 5) === "fifty") {
		return 50 + toNum(A.substring(5, 11));
	};
	if (A.substring(0, 5) === "sixty") {
		return 60 + toNum(A.substring(5, 11));
	};
	if (A.substring(0, 7) === "seventy") {
		return 70 + toNum(A.substring(7, 12));
	};
	if (A.substring(0, 6) === "eighty") {
		return 80 + toNum(A.substring(6, 11));
	};
	if (A.substring(0, 6) === "ninety") {
		return 90 + toNum(A.substring(6, 11));
	};
	if (A.substring(0, 10) == "onehundred") {
		return 100 + toNum(A.substring(10, 20));
	};

};

it('should return 29 for twentynine', function(){
	assert.equal(moreNums("twentynine"), 29);
});
console.log(moreNums("twentynine"));

it('should return 34 for thirtyfour', function(){
	assert.equal(moreNums("thirtyfour"), 34);
});
console.log(moreNums("thirtyfour"));

it('should return 41 for fortyone', function(){
	assert.equal(moreNums("fortyone"), 41);
});	
console.log(moreNums("fortyone"));

it('should return 53 for fiftythree', function(){
	assert.equal(moreNums("fiftythree"), 53);
});	
console.log(moreNums("fiftythree"));

it('should return 64 for sixtyfour', function(){
	assert.equal(moreNums("sixtyfour"), 64);
});	
console.log(moreNums("sixtyfour"));

it('should return 78 for seventyeight', function(){
	assert.equal(moreNums("seventyeight"), 78);
});	
console.log(moreNums("seventyeight"));

it('should return 95 for ninetyfive', function(){
	assert.equal(moreNums("ninetyfive"), 95);
});	
console.log(moreNums("ninetyfive"));

it('should return 111 for onehundredeleven', function(){
	assert.equal(moreNums("onehundredeleven"), 111);
});
console.log(moreNums("onehundredeleven"));

console.log(moreNums("onehundredfortytwo")); //it stops working here.  needs a refactor