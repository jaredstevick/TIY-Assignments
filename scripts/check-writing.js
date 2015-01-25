var assert = require('assert');

/*function toEnglish (a) {
    return "one";
}
it('should return 1 as string "one"', function() {
    assert.equal(toEnglish(1), "one");
})*/

//function toEnglish(a) {
//    if (a == 2) {
//        return "two";
//    }
//
//    else {
//        return "this is not the number 2";
//    }
//}
//
//console.log(toEnglish(2));
//
//it('should return "two" when 2 is entered and "not two" if any other number is entered', function () {
//    assert.equal(toEnglish(2), "two");
//
//} )

//function toEnglish (a) {
//    if (a == 3) {
//        return "three";
//    } else {
//        return "this is not the number 3";
//    }
//}
//console.log(toEnglish(3));
//
//it('should return "three" when 3 is entered and "not the number 3" if any other number is entered', function() {
//    assert.equal(toEnglish(3), "three");
//
//})

//function toEnglish (a) {
//    if (a == 4) {
//    return "four";
//    } else {
//        return "this is not the number 4";
//    }
//}
//console.log(toEnglish(4));
//it('should return "four" when 4 is entered and "not the number 4" if any other number is entered', function() {
//    assert.equal(toEnglish(4), "four");
//})
//
//
//function toEnglish (a) {
//    if (a == 5){
//        return "five";
//    } else {
//        return "this is not the number 5";
//    }
// }
//console.log(toEnglish(5));
//
//it('should return "five" when 5 is entered and "not the number 5" if any other number is entered', function() {
//    assert.equal(toEnglish(5), "five");
//})
//
//function toEnglish (a) {
//    if (a == 6) {
//        return "six";
//    } else {
//        return "this is not the number 6";
//    }
//}
//console.log(toEnglish(6));
//
//it('should return "six" when 6 is entered and "not the number 6" if any other number is entered', function() {
//    assert.equal(toEnglish(6), "six");
//})
//
//function toEnglish (a) {
//    if (a == 7) {
//        return "seven";
//    } else {
//        return "this is not the number 7";
//    }
//}
//console.log(toEnglish(7));
//
//it('should return "six" when 7 is entered and "not the number 7" if any other number is entered', function() {
//    assert.equal(toEnglish(7), "seven");
//})
//
//function toEnglish (a) {
//    if (a == 8) {
//        return "eight";
//    } else {
//        return "this is not the number 8";
//    }
//}
//console.log(toEnglish(8));
//
//it('should return "eight" when 8 is entered and "not the number 8" if any other number is entered', function() {
//    assert.equal(toEnglish(8), "eight");
//})
//function toEnglish (a) {
//    if (a == 9) {
//        return "nine";
//    } else {
//        return "this is not the number 9";
//    }
//}
//console.log(toEnglish(9));
//
//it('should return "nine" when 9 is entered and "not the number 9" if any other number is entered', function() {
//    assert.equal(toEnglish(9), "nine");
//})


//function toEnglish (a) {
//    if (a == 10) {
//        return "ten";
//    } else {
//        return "this is not the number ten";
//    }
//}
//console.log(toEnglish(10));
//
//it('should return "ten" when 10 is entered and "not the number 10" if any other number is entered', function() {
//    assert.equal(toEnglish(10), "ten");
//})


var assert = require('assert');

function toEnglish(A){
    if(A == 1){
        return "one"
    }else if (A==2){
        return "two"
    }else if (A==3){
        return "three"
    }else if (A==4){
        return "four"
    }else if (A==5){
        return "five"
    }else if (A==6){
        return "six"
    }else if (A==7){
        return "seven"
    }else if (A==8){
        return "eight"
    }else if (A==9){
        return "nine"
    }else if(A==10){
        return"ten"
    }else if (A==0){
        return "zero"
    }
}


it('should take 0 and return "zero"', function(){
    assert.equal(toEnglish(0), "zero");
});
it('should take 1 and return "one"', function(){
    assert.equal(toEnglish(1), "one");
})
it('should take 2 and return "two"',function(){
    assert.equal(toEnglish(2), "two");
})
it('should take 3 and return "three"', function(){
  assert.equal(toEnglish(3), "three");
  })
it('should take 4 and return "four"', function(){
    assert.equal(toEnglish(4), "four");
})
it('should take 5 and return "five"', function(){
    assert.equal(toEnglish(5), "five");
})
it('should take 6 and return "six"', function(){
    assert.equal(toEnglish(6), "six");
})
it('should take 7 and return "seven"', function(){
    assert.equal(toEnglish(7), "seven");
})
it('should take 8 and return "eight"', function(){
    assert.equal(toEnglish(8), "eight");
})
it('should take 9 and return "nine"', function(){
    assert.equal(toEnglish(9), "nine");
})
it('should take 10 and return "ten"', function(){
    assert.equal(toEnglish(10), "ten");
})

var assert = require('assert');
