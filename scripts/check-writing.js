var assert = require('assert');

var numbers = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty" ]

function toEnglish(n){
    return numbers[n];
}

console.log(toEnglish(4));

console.log(toEnglish(9));

console.log(toEnglish(5));

console.log(toEnglish(2));

console.log(toEnglish(10));

console.log(toEnglish(13));

console.log(toEnglish(19));

console.log(toEnglish(14));



it('should take 0 and return "zero"', function(){
    assert.equal(toEnglish(0), "zero");
});
it('should take 1 and return "one"', function(){
    assert.equal(toEnglish(1), "one");
});
it('should take 2 and return "two"',function(){
    assert.equal(toEnglish(2), "two");
});
it('should take 3 and return "three"', function(){
  assert.equal(toEnglish(3), "three");
});
it('should take 4 and return "four"', function(){
    assert.equal(toEnglish(4), "four");
});
it('should take 5 and return "five"', function(){
    assert.equal(toEnglish(5), "five");
});
it('should take 6 and return "six"', function(){
    assert.equal(toEnglish(6), "six");
});
it('should take 7 and return "seven"', function(){
    assert.equal(toEnglish(7), "seven");
});
it('should take 8 and return "eight"', function(){
    assert.equal(toEnglish(8), "eight");
});
it('should take 9 and return "nine"', function(){
    assert.equal(toEnglish(9), "nine");
});
it('should take 10 and return "ten"', function(){
    assert.equal(toEnglish(10), "ten");
});
it('should take 11 and return "eleven"', function(){
    assert.equal(toEnglish(11), "eleven");
});
it('should take 12 and return "twelve"', function(){
    assert.equal(toEnglish(12), "twelve");
});
it('should take 13 and return "thirteen"', function(){
    assert.equal(toEnglish(13), "thirteen");
});
it('should take 14 and return "fourteen"', function(){
    assert.equal(toEnglish(14), "fourteen");
});
it('should take 15 and return "fifteen"', function(){
    assert.equal(toEnglish(15), "fifteen");
});
it('should take 16 and return "sixteen"', function(){
    assert.equal(toEnglish(16), "sixteen");
});
it('should take 17 and return "seventeen"', function(){
    assert.equal(toEnglish(17), "seventeen");
});
it('should take 18 and return "eighteen"', function(){
    assert.equal(toEnglish(18), "eighteen");
});
it('should take 19 and return "nineteen"', function(){
    assert.equal(toEnglish(19), "nineteen");
});
it('should take 20 and return "twenty"', function(){
    assert.equal(toEnglish(20), "twenty");
});

