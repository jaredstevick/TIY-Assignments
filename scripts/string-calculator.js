var assert = require('assert');


console.log(Date());


it('should have a `fromEnglish` function', function(){
   assert(fromEnglish);
    assert.equal(typeof fromEnglish, 'function');
});


it('return an integer for an english number word', function(){
    assert.equal(fromEnglish("zero"), 0);
    assert.equal(fromEnglish("one"), 1);
    assert.equal(fromEnglish("two"), 2);
    assert.equal(fromEnglish("three"), 3);
    assert.equal(fromEnglish("four"), 4);
    assert.equal(fromEnglish("five"), 5);
    assert.equal(fromEnglish("six"), 6);
    assert.equal(fromEnglish("seven"), 7);
    assert.equal(fromEnglish("eight"), 8);
    assert.equal(fromEnglish("nine"), 9);
    assert.equal(fromEnglish("ten"), 10);
    assert.equal(fromEnglish("eleven"), 11);
    assert.equal(fromEnglish("twelve"), 12);
    assert.equal(fromEnglish("thirteen"), 13);
    assert.equal(fromEnglish("fourteen"), 14);
    assert.equal(fromEnglish("fifteen"), 15);
    assert.equal(fromEnglish("sixteen"), 16);
    assert.equal(fromEnglish("seventeen"), 17);
    assert.equal(fromEnglish("eighteen"), 18);
    assert.equal(fromEnglish("nineteen"), 19);
    assert.equal(fromEnglish("twenty"), 20);
});



function fromEnglish(A){
    var numbers = {

        "ninety": 90,
        "eighty": 80,
        "seventy": 70,
        "sixty": 60,
        "fifty": 50,
        "forty": 40,
        "thirty": 30,
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

//but now i can do ALL THE MATHS! yay maths!


console.log(fromEnglish("five") + fromEnglish("seven")); //12
console.log(fromEnglish("five") * fromEnglish("seven"));  //35
console.log(fromEnglish("eighteen") / fromEnglish("six"));  //3
console.log(fromEnglish("nineteen") - fromEnglish("four"));  //15
console.log(fromEnglish("eleven") % fromEnglish("five"));  //1


//pointless tests because i know my function works, and javascript knows how to do math
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("zero") + fromEnglish("zero"), 0);
    assert.equal(fromEnglish("zero") + fromEnglish("one"), 1);
    assert.equal(fromEnglish("zero") + fromEnglish("two"), 2);
    assert.equal(fromEnglish("zero") + fromEnglish("three"), 3);
    assert.equal(fromEnglish("zero") + fromEnglish("four"), 4);
    assert.equal(fromEnglish("zero") + fromEnglish("five"), 5);
    assert.equal(fromEnglish("zero") + fromEnglish("six"), 6);
    assert.equal(fromEnglish("zero") + fromEnglish("seven"), 7);
    assert.equal(fromEnglish("zero") + fromEnglish("eight"), 8);
    assert.equal(fromEnglish("zero") + fromEnglish("nine"), 9);
    assert.equal(fromEnglish("zero") + fromEnglish("ten"), 10);
    assert.equal(fromEnglish("zero") + fromEnglish("eleven"), 11);
    assert.equal(fromEnglish("zero") + fromEnglish("twelve"), 12);
    assert.equal(fromEnglish("zero") + fromEnglish("thirteen"), 13);
    assert.equal(fromEnglish("zero") + fromEnglish("fourteen"), 14);
    assert.equal(fromEnglish("zero") + fromEnglish("fifteen"), 15);
    assert.equal(fromEnglish("zero") + fromEnglish("sixteen"), 16);
    assert.equal(fromEnglish("zero") + fromEnglish("seventeen"), 17);
    assert.equal(fromEnglish("zero") + fromEnglish("eighteen"), 18);
    assert.equal(fromEnglish("zero") + fromEnglish("nineteen"), 19);
    assert.equal(fromEnglish("zero") + fromEnglish("twenty"), 20);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("one") + fromEnglish("zero"), 1);
    assert.equal(fromEnglish("one") + fromEnglish("one"), 2);
    assert.equal(fromEnglish("one") + fromEnglish("two"), 3);
    assert.equal(fromEnglish("one") + fromEnglish("three"), 4);
    assert.equal(fromEnglish("one") + fromEnglish("four"), 5);
    assert.equal(fromEnglish("one") + fromEnglish("five"), 6);
    assert.equal(fromEnglish("one") + fromEnglish("six"), 7);
    assert.equal(fromEnglish("one") + fromEnglish("seven"), 8);
    assert.equal(fromEnglish("one") + fromEnglish("eight"), 9);
    assert.equal(fromEnglish("one") + fromEnglish("nine"), 10);
    assert.equal(fromEnglish("one") + fromEnglish("ten"), 11);
    assert.equal(fromEnglish("one") + fromEnglish("eleven"), 12);
    assert.equal(fromEnglish("one") + fromEnglish("twelve"), 13);
    assert.equal(fromEnglish("one") + fromEnglish("thirteen"), 14);
    assert.equal(fromEnglish("one") + fromEnglish("fourteen"), 15);
    assert.equal(fromEnglish("one") + fromEnglish("fifteen"), 16);
    assert.equal(fromEnglish("one") + fromEnglish("sixteen"), 17);
    assert.equal(fromEnglish("one") + fromEnglish("seventeen"), 18);
    assert.equal(fromEnglish("one") + fromEnglish("eighteen"), 19);
    assert.equal(fromEnglish("one") + fromEnglish("nineteen"), 20);
    assert.equal(fromEnglish("one") + fromEnglish("twenty"), 21);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("two") + fromEnglish("zero"), 2);
    assert.equal(fromEnglish("two") + fromEnglish("one"), 3);
    assert.equal(fromEnglish("two") + fromEnglish("two"), 4);
    assert.equal(fromEnglish("two") + fromEnglish("three"), 5);
    assert.equal(fromEnglish("two") + fromEnglish("four"), 6);
    assert.equal(fromEnglish("two") + fromEnglish("five"), 7);
    assert.equal(fromEnglish("two") + fromEnglish("six"), 8);
    assert.equal(fromEnglish("two") + fromEnglish("seven"), 9);
    assert.equal(fromEnglish("two") + fromEnglish("eight"), 10);
    assert.equal(fromEnglish("two") + fromEnglish("nine"), 11);
    assert.equal(fromEnglish("two") + fromEnglish("ten"), 12);
    assert.equal(fromEnglish("two") + fromEnglish("eleven"), 13);
    assert.equal(fromEnglish("two") + fromEnglish("twelve"), 14);
    assert.equal(fromEnglish("two") + fromEnglish("thirteen"), 15);
    assert.equal(fromEnglish("two") + fromEnglish("fourteen"), 16);
    assert.equal(fromEnglish("two") + fromEnglish("fifteen"), 17);
    assert.equal(fromEnglish("two") + fromEnglish("sixteen"), 18);
    assert.equal(fromEnglish("two") + fromEnglish("seventeen"), 19);
    assert.equal(fromEnglish("two") + fromEnglish("eighteen"), 20);
    assert.equal(fromEnglish("two") + fromEnglish("nineteen"), 21);
    assert.equal(fromEnglish("two") + fromEnglish("twenty"), 22);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("three") + fromEnglish("zero"), 3);
    assert.equal(fromEnglish("three") + fromEnglish("one"), 4);
    assert.equal(fromEnglish("three") + fromEnglish("two"), 5);
    assert.equal(fromEnglish("three") + fromEnglish("three"), 6);
    assert.equal(fromEnglish("three") + fromEnglish("four"), 7);
    assert.equal(fromEnglish("three") + fromEnglish("five"), 8);
    assert.equal(fromEnglish("three") + fromEnglish("six"), 9);
    assert.equal(fromEnglish("three") + fromEnglish("seven"), 10);
    assert.equal(fromEnglish("three") + fromEnglish("eight"), 11);
    assert.equal(fromEnglish("three") + fromEnglish("nine"), 12);
    assert.equal(fromEnglish("three") + fromEnglish("ten"), 13);
    assert.equal(fromEnglish("three") + fromEnglish("eleven"), 14);
    assert.equal(fromEnglish("three") + fromEnglish("twelve"), 15);
    assert.equal(fromEnglish("three") + fromEnglish("thirteen"), 16);
    assert.equal(fromEnglish("three") + fromEnglish("fourteen"), 17);
    assert.equal(fromEnglish("three") + fromEnglish("fifteen"), 18);
    assert.equal(fromEnglish("three") + fromEnglish("sixteen"), 19);
    assert.equal(fromEnglish("three") + fromEnglish("seventeen"), 20);
    assert.equal(fromEnglish("three") + fromEnglish("eighteen"), 21);
    assert.equal(fromEnglish("three") + fromEnglish("nineteen"), 22);
    assert.equal(fromEnglish("three") + fromEnglish("twenty"), 23);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("four") + fromEnglish("zero"), 4);
    assert.equal(fromEnglish("four") + fromEnglish("one"), 5);
    assert.equal(fromEnglish("four") + fromEnglish("two"), 6);
    assert.equal(fromEnglish("four") + fromEnglish("three"), 7);
    assert.equal(fromEnglish("four") + fromEnglish("four"), 8);
    assert.equal(fromEnglish("four") + fromEnglish("five"), 9);
    assert.equal(fromEnglish("four") + fromEnglish("six"), 10);
    assert.equal(fromEnglish("four") + fromEnglish("seven"), 11);
    assert.equal(fromEnglish("four") + fromEnglish("eight"), 12);
    assert.equal(fromEnglish("four") + fromEnglish("nine"), 13);
    assert.equal(fromEnglish("four") + fromEnglish("ten"), 14);
    assert.equal(fromEnglish("four") + fromEnglish("eleven"), 15);
    assert.equal(fromEnglish("four") + fromEnglish("twelve"), 16);
    assert.equal(fromEnglish("four") + fromEnglish("thirteen"), 17);
    assert.equal(fromEnglish("four") + fromEnglish("fourteen"), 18);
    assert.equal(fromEnglish("four") + fromEnglish("fifteen"), 19);
    assert.equal(fromEnglish("four") + fromEnglish("sixteen"), 20);
    assert.equal(fromEnglish("four") + fromEnglish("seventeen"), 21);
    assert.equal(fromEnglish("four") + fromEnglish("eighteen"), 22);
    assert.equal(fromEnglish("four") + fromEnglish("nineteen"), 23);
    assert.equal(fromEnglish("four") + fromEnglish("twenty"), 24);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("five") + fromEnglish("zero"), 5);
    assert.equal(fromEnglish("five") + fromEnglish("one"), 6);
    assert.equal(fromEnglish("five") + fromEnglish("two"), 7);
    assert.equal(fromEnglish("five") + fromEnglish("three"), 8);
    assert.equal(fromEnglish("five") + fromEnglish("four"), 9);
    assert.equal(fromEnglish("five") + fromEnglish("five"), 10);
    assert.equal(fromEnglish("five") + fromEnglish("six"), 11);
    assert.equal(fromEnglish("five") + fromEnglish("seven"), 12);
    assert.equal(fromEnglish("five") + fromEnglish("eight"), 13);
    assert.equal(fromEnglish("five") + fromEnglish("nine"), 14);
    assert.equal(fromEnglish("five") + fromEnglish("ten"), 15);
    assert.equal(fromEnglish("five") + fromEnglish("eleven"), 16);
    assert.equal(fromEnglish("five") + fromEnglish("twelve"), 17);
    assert.equal(fromEnglish("five") + fromEnglish("thirteen"), 18);
    assert.equal(fromEnglish("five") + fromEnglish("fourteen"), 19);
    assert.equal(fromEnglish("five") + fromEnglish("fifteen"), 20);
    assert.equal(fromEnglish("five") + fromEnglish("sixteen"), 21);
    assert.equal(fromEnglish("five") + fromEnglish("seventeen"), 22);
    assert.equal(fromEnglish("five") + fromEnglish("eighteen"), 23);
    assert.equal(fromEnglish("five") + fromEnglish("nineteen"), 24);
    assert.equal(fromEnglish("five") + fromEnglish("twenty"), 25);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("six") + fromEnglish("zero"), 6);
    assert.equal(fromEnglish("six") + fromEnglish("one"), 7);
    assert.equal(fromEnglish("six") + fromEnglish("two"), 8);
    assert.equal(fromEnglish("six") + fromEnglish("three"), 9);
    assert.equal(fromEnglish("six") + fromEnglish("four"), 10);
    assert.equal(fromEnglish("six") + fromEnglish("five"), 11);
    assert.equal(fromEnglish("six") + fromEnglish("six"), 12);
    assert.equal(fromEnglish("six") + fromEnglish("seven"), 13);
    assert.equal(fromEnglish("six") + fromEnglish("eight"), 14);
    assert.equal(fromEnglish("six") + fromEnglish("nine"), 15);
    assert.equal(fromEnglish("six") + fromEnglish("ten"), 16);
    assert.equal(fromEnglish("six") + fromEnglish("eleven"), 17);
    assert.equal(fromEnglish("six") + fromEnglish("twelve"), 18);
    assert.equal(fromEnglish("six") + fromEnglish("thirteen"), 19);
    assert.equal(fromEnglish("six") + fromEnglish("fourteen"), 20);
    assert.equal(fromEnglish("six") + fromEnglish("fifteen"), 21);
    assert.equal(fromEnglish("six") + fromEnglish("sixteen"), 22);
    assert.equal(fromEnglish("six") + fromEnglish("seventeen"), 23);
    assert.equal(fromEnglish("six") + fromEnglish("eighteen"), 24);
    assert.equal(fromEnglish("six") + fromEnglish("nineteen"), 25);
    assert.equal(fromEnglish("six") + fromEnglish("twenty"), 26);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("seven") + fromEnglish("zero"), 7);
    assert.equal(fromEnglish("seven") + fromEnglish("one"), 8);
    assert.equal(fromEnglish("seven") + fromEnglish("two"), 9);
    assert.equal(fromEnglish("seven") + fromEnglish("three"), 10);
    assert.equal(fromEnglish("seven") + fromEnglish("four"), 11);
    assert.equal(fromEnglish("seven") + fromEnglish("five"), 12);
    assert.equal(fromEnglish("seven") + fromEnglish("six"), 13);
    assert.equal(fromEnglish("seven") + fromEnglish("seven"), 14);
    assert.equal(fromEnglish("seven") + fromEnglish("eight"), 15);
    assert.equal(fromEnglish("seven") + fromEnglish("nine"), 16);
    assert.equal(fromEnglish("seven") + fromEnglish("ten"), 17);
    assert.equal(fromEnglish("seven") + fromEnglish("eleven"), 18);
    assert.equal(fromEnglish("seven") + fromEnglish("twelve"), 19);
    assert.equal(fromEnglish("seven") + fromEnglish("thirteen"), 20);
    assert.equal(fromEnglish("seven") + fromEnglish("fourteen"), 21);
    assert.equal(fromEnglish("seven") + fromEnglish("fifteen"), 22);
    assert.equal(fromEnglish("seven") + fromEnglish("sixteen"), 23);
    assert.equal(fromEnglish("seven") + fromEnglish("seventeen"), 24);
    assert.equal(fromEnglish("seven") + fromEnglish("eighteen"), 25);
    assert.equal(fromEnglish("seven") + fromEnglish("nineteen"), 26);
    assert.equal(fromEnglish("seven") + fromEnglish("twenty"), 27);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("eight") + fromEnglish("zero"), 8);
    assert.equal(fromEnglish("eight") + fromEnglish("one"), 9);
    assert.equal(fromEnglish("eight") + fromEnglish("two"), 10);
    assert.equal(fromEnglish("eight") + fromEnglish("three"), 11);
    assert.equal(fromEnglish("eight") + fromEnglish("four"), 12);
    assert.equal(fromEnglish("eight") + fromEnglish("five"), 13);
    assert.equal(fromEnglish("eight") + fromEnglish("six"), 14);
    assert.equal(fromEnglish("eight") + fromEnglish("seven"), 15);
    assert.equal(fromEnglish("eight") + fromEnglish("eight"), 16);
    assert.equal(fromEnglish("eight") + fromEnglish("nine"), 17);
    assert.equal(fromEnglish("eight") + fromEnglish("ten"), 18);
    assert.equal(fromEnglish("eight") + fromEnglish("eleven"), 19);
    assert.equal(fromEnglish("eight") + fromEnglish("twelve"), 20);
    assert.equal(fromEnglish("eight") + fromEnglish("thirteen"), 21);
    assert.equal(fromEnglish("eight") + fromEnglish("fourteen"), 22);
    assert.equal(fromEnglish("eight") + fromEnglish("fifteen"), 23);
    assert.equal(fromEnglish("eight") + fromEnglish("sixteen"), 24);
    assert.equal(fromEnglish("eight") + fromEnglish("seventeen"), 25);
    assert.equal(fromEnglish("eight") + fromEnglish("eighteen"), 26);
    assert.equal(fromEnglish("eight") + fromEnglish("nineteen"), 27);
    assert.equal(fromEnglish("eight") + fromEnglish("twenty"), 28);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("nine") + fromEnglish("zero"), 9);
    assert.equal(fromEnglish("nine") + fromEnglish("one"), 10);
    assert.equal(fromEnglish("nine") + fromEnglish("two"), 11);
    assert.equal(fromEnglish("nine") + fromEnglish("three"), 12);
    assert.equal(fromEnglish("nine") + fromEnglish("four"), 13);
    assert.equal(fromEnglish("nine") + fromEnglish("five"), 14);
    assert.equal(fromEnglish("nine") + fromEnglish("six"), 15);
    assert.equal(fromEnglish("nine") + fromEnglish("seven"), 16);
    assert.equal(fromEnglish("nine") + fromEnglish("eight"), 17);
    assert.equal(fromEnglish("nine") + fromEnglish("nine"), 18);
    assert.equal(fromEnglish("nine") + fromEnglish("ten"), 19);
    assert.equal(fromEnglish("nine") + fromEnglish("eleven"), 20);
    assert.equal(fromEnglish("nine") + fromEnglish("twelve"), 21);
    assert.equal(fromEnglish("nine") + fromEnglish("thirteen"), 22);
    assert.equal(fromEnglish("nine") + fromEnglish("fourteen"), 23);
    assert.equal(fromEnglish("nine") + fromEnglish("fifteen"), 24);
    assert.equal(fromEnglish("nine") + fromEnglish("sixteen"), 25);
    assert.equal(fromEnglish("nine") + fromEnglish("seventeen"), 26);
    assert.equal(fromEnglish("nine") + fromEnglish("eighteen"), 27);
    assert.equal(fromEnglish("nine") + fromEnglish("nineteen"), 28);
    assert.equal(fromEnglish("nine") + fromEnglish("twenty"), 29);
});
it('should do math on two string numbers and return the result as an integer', function(){
    assert.equal(fromEnglish("ten") + fromEnglish("zero"), 10);
    assert.equal(fromEnglish("ten") + fromEnglish("one"), 11);
    assert.equal(fromEnglish("ten") + fromEnglish("two"), 12);
    assert.equal(fromEnglish("ten") + fromEnglish("three"), 13);
    assert.equal(fromEnglish("ten") + fromEnglish("four"), 14);
    assert.equal(fromEnglish("ten") + fromEnglish("five"), 15);
    assert.equal(fromEnglish("ten") + fromEnglish("six"), 16);
    assert.equal(fromEnglish("ten") + fromEnglish("seven"), 17);
    assert.equal(fromEnglish("ten") + fromEnglish("eight"), 18);
    assert.equal(fromEnglish("ten") + fromEnglish("nine"), 19);
    assert.equal(fromEnglish("ten") + fromEnglish("ten"), 20);
    assert.equal(fromEnglish("ten") + fromEnglish("eleven"), 21);
    assert.equal(fromEnglish("ten") + fromEnglish("twelve"), 22);
    assert.equal(fromEnglish("ten") + fromEnglish("thirteen"), 23);
    assert.equal(fromEnglish("ten") + fromEnglish("fourteen"), 24);
    assert.equal(fromEnglish("ten") + fromEnglish("fifteen"), 25);
    assert.equal(fromEnglish("ten") + fromEnglish("sixteen"), 26);
    assert.equal(fromEnglish("ten") + fromEnglish("seventeen"), 27);
    assert.equal(fromEnglish("ten") + fromEnglish("eighteen"), 28);
    assert.equal(fromEnglish("ten") + fromEnglish("nineteen"), 29);
    assert.equal(fromEnglish("ten") + fromEnglish("twenty"), 30);
});


//can't believe i actually did all that

//if only i knew how to write a loop with 3 variables to print this crap out
//    assert.equal(fromEnglish(A)) + fromEnglish(B), C);



//some more tests to see what i can do
console.log(fromEnglish("twentyone")); //undefined, obviously
console.log(fromEnglish("twenty one")); //undefined
console.log(fromEnglish("forty") + fromEnglish("seven")); //47
console.log(fromEnglish("forty", "one")); // 40   :-(
console.log(fromEnglish("applesauce") + fromEnglish("four")); //  NaN
console.log(fromEnglish("FIFTEEN") + fromEnglish("nine")); //  NaN

/*need to find a way to turn number words > 19 into fromEnglish("twenty", "thirty", "forty", etc) + numbers[A] */

/* other bug fixes -- caps returns errors need to use string.toLowerCase()
should put in something incase something other than a number is entered */
