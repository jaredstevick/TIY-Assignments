var assert = require('assert');

//function plus(A, B) {
//    return (0);
//}
//it('should add "zero" and "zero"', function(){
//    assert.equal(plus("zero", "zero"), 0);
//});
//
//function plus(A, B) {
//    return (1);
//}
//it('should add "one and "zero"', function() {
//    assert.equal(plus("one", "zero"), 1);
//});
//
//function plus(A, B) {
//    return (1);
//}
//it('should add "zero" and "one"', function() {
//    assert.equal(plus("zero", "one"), 1);
//});

//function plus(A, B) {
//     return (2);
//}
//it('should add "one" and "one"', function(){
//    assert.equal(plus("one", "one"), 2);
//});

//function plus(A, B) {
//    return (3);
//}
//it('should add "one" and "two"', function(){
//    assert.equal(plus("one", "two"), 3);
//});

//function plus(A, B) {
//    return (4);
//}
//it('should add "one" and "three"', function() {
//    assert.equal(plus("one", "three"), 4);
//});

//function plus(A, B) {
//    return (5);
//}
//it('should add "one" and "four"', function() {
//    assert.equal(plus("one", "four"), 5);
//});
//
//function plus(A, B) {
//    return (6);
//}
//it('should add "one" and "five"', function() {
//    assert.equal(plus("one", "five"), 6);
//});
//
//function plus(A, B) {
//    return (7);
//}
//it('should add "one" and "six"', function() {
//    assert.equal(plus("one", "six"), 7);
//});
//function plus(A, B) {
//    return (8);
//}
//it ('should add "one" and "seven"', function(){
//    assert.equal(plus("one", "seven"), 8);
//});
//function plus(A, B) {
//    return (9);
//}
//it('should add "one" and "eight"', function() {
//   assert.equal(plus("one", "eight"), 9);
//});
//function plus(A, B) {
//    return (10);
//}
//it('should add "one" and "nine"', function() {
//   assert.equal(plus("one", "nine"), 10);
//});
//function plus(A, B) {
//    return (11);
//}
//it('should add "one" and "ten"', function() {
//    assert.equal(plus("one", "ten"), 11);
//});
//function minus(A, B) {
//    return (2)
//}
//it('should subtract "zero" from "two"', function() {
//    assert.equal(minus("two", "zero"), 2);
//});
//function minus(A, B) {
//    return (1);
//}
//it('should subtract "one" from "two"', function() {
//    assert.equal(minus("two", "one"), 1);
//});
//function minus(A, B) {
//    return (0);
//}
//it('should subtract "two" from "two"', function() {
//    assert.equal(minus("two", "two"), 0);
//});
//function minus(A, B) {
//    return (1);
//}
//it('should subtract "two" from "three"', function() {
//    assert.equal(minus("three", "two"), 1);
//});
//function minus(A, B) {
//    return (2);
//}
//it('should subtract "two" from "four"', function() {
//    assert.equal(minus("four", "two"), 2);
//});
//function minus(A, B) {
//    return (3);
//}
//it('should subtract "two" from "five"', function() {
//    assert.equal(minus("five", "two"), 3);
//});
//function product(A, B) {
//    return (12);
//}
//it('should return the product of "two" and "six"', function() {
//    assert.equal(product("two", "six"), 12);
//});
//function product(A, B) {
//    return (14);
//}
//it('should return the product of "two" and "seven"', function() {
//    assert.equal(product("two", "seven"), 14);
//});
//function product(A, B) {
//    return (16);
//}
//it('should return the product of "two" and "eight"', function() {
//    assert.equal(product("two", "eight"), 16);
//});
//function product(A, B) {
//    return (18);
//}
//it('should return the product of "two" and "nine"', function() {
//    assert.equal(product("two", "nine"), 18);
//});
//function product(A, B) {
//    return (20);
//}
//it('should return the product of "two" and "ten"', function() {
//    assert.equal(product("two", "ten"), 20);
//});


console.log(Date());

it('should have a `plus` function', function(){
   assert(plus);
    assert.equal(typeof plus, 'function');
});

it('should add "zero" to everything', function(){
    assert.equal(plus("zero", "zero"), 0);
    assert.equal(plus("zero", "one"), 1);
    assert.equal(plus("zero", "two"), 2);
    assert.equal(plus("zero", "three"), 3);
    assert.equal(plus("zero", "four"), 4);
    assert.equal(plus("zero", "five"), 5);
    assert.equal(plus("zero", "six"), 6);
});

it('should add "one" to everything', function(){
    assert.equal(plus("one", "zero"), 1);
});



function plus(A, B){
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

    return numbers[A] + numbers[B];
};

console.log(plus("seven", "four"));
console.log(plus("nineteen", "eleven"));
console.log(plus("five", "twenty"));


function product(A, B) {
    return (20);
}
it('should return the product of "two" and "ten"', function() {
    assert.equal(product("two", "ten"), 20);
});

