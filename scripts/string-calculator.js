var assert = require('assert');


console.log(Date());

//these test don't work anymore with new and improved fromEnglish function
//it('should have a `fromEnglish` function', function(){
//   assert(fromEnglish);
//    assert.equal(typeof fromEnglish, 'function');
//});
//
//it('should add "zero" to everything', function(){
//    assert.equal(fromEnglish("zero", "zero"), 0);
//    assert.equal(fromEnglish("zero", "one"), 1);
//    assert.equal(fromEnglish("zero", "two"), 2);
//    assert.equal(fromEnglish("zero", "three"), 3);
//    assert.equal(fromEnglish("zero", "four"), 4);
//    assert.equal(fromEnglish("zero", "five"), 5);
//    assert.equal(fromEnglish("zero", "six"), 6);
//});
//
//it('should add "one" to everything', function(){
//    assert.equal(fromEnglish("one", "zero"), 1);
//});



function fromEnglish(A){
    var numbers = {
        "twenty": 20,
        "nineteen": 19,
        "eighteen": 18,
        "seventeen": 17,
        "sixteen": 16,
        "fifteen": 15,
        "fourteen": 14,
        "thirteen": 13,
        "twelve": 12,
        "eleven": 11,
        "ten": 10,
        "nine": 9,
        "eight": 8,
        "seven": 7,
        "six": 6,
        "five": 5,
        "four": 4,
        "three": 3,
        "two": 2,
        "one": 1,
        "zero": 0
    };

    return numbers[A];
};


//changed fromEnglish to output only one number, now these obviously don't work

//console.log(fromEnglish("seven", "four"));
//console.log(fromEnglish("nineteen", "eleven"));
//console.log(fromEnglish("five", "twenty"));
//console.log(fromEnglish("eight", "four"));

//but now i can do maths! yay maths!


console.log(fromEnglish("five") + fromEnglish("seven"));
console.log(fromEnglish("five") * fromEnglish("seven"));
console.log(fromEnglish("eighteen") / fromEnglish("six"));
console.log(fromEnglish("nineteen") - fromEnglish("four"));
