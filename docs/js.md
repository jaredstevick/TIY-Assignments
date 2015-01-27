## Javascript Documentation


### [Primative: Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

* _symbol_: `null`
* _pronunciation_: "null", "null value", "is null"
* _examples_:
```javascript
null // how exciting
```

### [Primative: Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

* _symbol_: `true` and `false`
* _pronunciation_: "True" and "False"
* _examples_:
```javascript
'hello'==4 // false
```

### [Primative: Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

* _symbol_: `new Number(value);`
* _pronunciation_: "number"
* _examples_:
```javascript
Number("123") // 123
```

### [Primative: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

* _symbol_: `"string"`
* _pronunciation_: "string 'this is a string'"
* _examples_:
```javascript
"this is a string"
```

### [Literal: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

* _symbol_: `object(x)`
* _pronunciation_: "object(stuff)"
* _examples_:
```javascript
var object = {} // creates an empty object with no properties
```

### [Literal: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

* _symbol_: `[array contents]`
* _pronunciation_: array - contents
* _examples_:
```javascript
[element0, element1, ..., elementN]
```

### [Literal: Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

* _symbol_: ``
* _pronunciation_:
* _examples_:
```javascript

```

### [Operator: Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition_(.2B))

* _symbol_: `+`
* _pronunciation_: "plus", "added to"
* _examples_:
```javascript
1 + 2 + 3 // 6, of course
'1' + 2 + 3 // '123', obviously... WTF?
```

### [Operator: Modulus](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

* _symbol_: `%`
* _pronuntciation_: 'mod u lus'
* _examples_:
```javascript
12 % 5 // 2 and 15 % 3 // 0
```

### [Operator: Increment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators)

* _symbol_: `++`
* _pronunciation_: `in cre ment`
* _examples:
```javascript
4++ // 5, 6, 7....
```

### [Operator: Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `==`
* _pronunciation_: "equals"
* _examples_:
```javascript
4 == "four"  // false  and 4 == 5 // false
```

### [Operator: Not Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `!=`
* _pronunciation_: does not equal
* _examples:
```javascript
4 != 4 // false and 4 != 5 // true
```
### [Operator: Strict Not Equal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `!==`
* _pronunciation_: "strict not equals"
* _example_:
```javascript
var1 !== ""3" and 3 !== '3'
```

### [Logical Operator: &&](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `&&`
* _pronunciation_: Logical AND
* _examples_:
```javaascript
var a1 =  true && true;  // t && t returns true and var a5 = "Cat" && "Dog";    // t && t returns Dog
```

### [Logical Operator: !](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `!`
* _pronunciation_: `logical not`
* _examples_:
```javascript
var n1 = !true;  // !t returns false and var n2 = !false; // !f returns true
```

### [String Operator: Concatenation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators)

* _symbol_: `+`
* _pronunciation_: "concatenate"
* _examples_:
```javescript
"cat + "dog" // "catdog" and "10" + 2 // 102
```

### [Global Object: Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

* _symbol_: `undefined`
* _pronunciation_: "undefined"
* _examples_:
```javascript
if var(x)=undefined{this code executes} else {this happens}
```

### [Global Object: Not a Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN)

* _symbol_: `NaN`
* _pronunciation_: "not a number"
* _examples_:
```javascript
NaN === NaN;        // false and Number.NaN === NaN; // false
```

### [Global Objects: Infinity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity)

* _symbol_: `Infinity`
* _pronunciation_: "Infinity"
* _examples_:
```javascript
var smallNumber = (-Number.MAX_VALUE) * 2; and if (smallNumber == Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

### [Conditional Statement: If](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `if`
* _pronunciation_: "if" lol
* _examples:
```javascript
if (condition) { statement runs if statement evaluates to true; / if (x=y) { do this;}
```

### [Conditional Statement: Else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements)

* _symbol_: `else`
* _pronunciation_: "else"
* _examples_:
```javascript
if (condition1) { statement runs if condition1 true} else { statement 2;}
```

### [Statement: Return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)

* _symbol_: `return`
* pronunciation_: "return"
* _examples_:
```javascript
return [[expression]] // expression   --  stops the execution of a function  -- return true; return false; etc
```

### [Loop Statement: for statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#for_Statement)

* _symbol_: `for`
* _pronunciation_: "for"
* _examples_:
```javascript
for ([initialExpression]; [condition]; [incrementExpression]) statement --for(var i=0; i < selectObject.options.length; i++) { if (selectObject.options[i].selected)  numberSelected++; }   return numberSelected;}
```

### [Loop Statement: Do...While Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#do...while_Statement)

* _symbol_: `do`
* _pronunciation_: "do"
* _examples_:
```javascript
do { statement;  } while (condition); --  do { i +=1; document.write(i);} while (i < 5);
```

### [Loop Statement: While Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#while_Statement)

* _symbol_: `while`
* _pronunciation_: "while"
* _examples_:
```javascript
while (condition) - statement      n=0; x=0; while (n < 3) {n++; x += n;}
```

### [Loop Statement: Break Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#break_Statement)

* _symbol_: `break`
* _pronunciation_: "break"
* _examples_:
```javascript
break;  for (i = 0; i < a.length; i++) {if (a[i] == theValue)   break;  }
```

### [Loop Statement: Continue Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#continue_Statement)

* _symbol_: `continue`
* _pronunciation_: "continue"
* _examples_:
```javascript
continue;       i = 0; n = 0;   while (i < 5) {i++;  if (i ==3)  continue;   n+=1;}

### [Object Manipulation Statement: For Each...In Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#for_each...in_Statement)

* _symbol_: `for each...in`
* _pronunciation_: "for each...in"
* _examples_:
```javascript
iterates over values of objects' properties, not names --  for each (var item in obj) { sum += item;}
```

### [Control Flow Statement: Comments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Statements#Comments)

* _symbol_: `//`
* _pronunciation_: "comment"
* _examples_:
```javascript
//this is a comment that takes up one line only
/* this comment can span more than one line and be as long as you want....kinda looks like a css comment */
```

### [Iterator Method: Array.prototype.every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* summary: `every()` tests whether ALL elements in the array pass the test given in the function
* syntax: `arr.every(callback[, thisArg])`
* parameters:
*    `callback:` -function to test each element against - takes three arguments:
*       `currentValue` -the current element being processed in the array
*       `index` -the index of the current element being processed in the array
*       `array` -the array `every()` was called upon
*       `thisArg` -optional. the value to use as "this" when executing the callback
* Returns: Booleans -if `callback` returns true for EVERY element
* Example:
```javascript
function every(anArray, callback){
  var hasFailed = false; // it hasn't has it?
  // iterate...
  anArray.foreach(function(item, index, all){
    if ( hasFailed ) return; // one failure ruins everything...
    hasFailed = !callback(item, index, all); // why invert here?
  });
  return !hasFailed; // Another inverse?
  // If `anArray` is empty, it will return true
}
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false - 5 and 8 are not larger than or equal to 10
[12, 54, 18, 130, 44].every(isBigEnough); // true  - all elements are larger than 10
```

### [Iterator Method: Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* summary: `forEach()` executes the provided function once per element in the array
* syntax: `arr.forEach(callback[, thisArg])`
* parameters:
*   `callback:` -function that produces an element of the new array - takes three arguments:
*       `currentValue` -the current array element being processed
*       `index` -the index of the current array element being processed
*       `array` -the array `forEach` was called upon
*       `thisArg` -optional. the value to use as this when executing the callback
* Returns: depends on what the function returns
* Example:
```javascript
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// no element at index 2, so it is not visited
[2, 5, , 9].forEach(logArrayElements);
// will log to the console:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

### [Iterator Method: Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* summary: `some()` tests whether a particular element in the array passes the test given by the provided function. executes once per element until callback returns true
* syntax: `arr.some(callback[, thisArg])`
* parameters:
*   `callback:` -function to test each element - takes three arguments
*       `currentValue` -the current element being processed
*       `index` -the index of the element being processed
*       `array` -the array `some()` was called on
*   `thisArg` -optional. this is the value used when executing callback
* Returns: Boolean -returns true if it finds an element that meets the conditions set in the function
* Example:
```javascript
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false -none of the elements are larger than ten
[12, 5, 8, 1, 4].some(isBiggerThan10); // true -12 is larger than 10
```

### [Iterator Method: Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* summary: `filter()` creates a new array with all elements that pass the test implemented by the provided function
* syntax: `arr.filter(callback[, thisArg])`
* parameters:
*   `callback:` -function to test each element in the array. it is invoked with three arguments: element, index, and array
*   `thisArg` -optional. -value to use as `this` when executing callback
* Returns: depends on what the function asks for
* Example:
```javascript
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44] // `filter(isBigEnough)` creates a new array with the elements that meet the condition >= ten
```

### [Iterator Method: Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* summary: `map()` creates a new array with the results of calling a provided function once on every element in the array
* syntax: `arr.map(callback[, thisArg])`
* parameters:
*   `callback:` -function that produces an element of the new array. takes three arguments:
*       `currentValue` -current element being processed in the array
*       `index` -the index of the current element being processed
*       `array` -the array `map()` was called on
*   `thisArg` -optional. the value to use as `this` when executing the callback
* Returns: calls the function once on every element and returns a new array from the results
* Example:
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9] //does not change the array it acted on, creates a new one with the results of Math.sqrt//
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9] //doubles the numbers and creates a new array with those values
```

### [Iterator Method: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* summary: `reduce()` applies a function against an accumulator AND each value of the array from left to right
* syntax: `arr.reduce(callback[, initialValue])`
* parameters:
*   `callback:` -function to execute on each value- takes FOUR arguments:
*       `previousValue` -the value previously returned in the last invocation of the callback=initialValue (if one was supplied)
*       `currentValue` -the current element being processed
*       `index` -the index of the element being processed
*       `array` -the array `reduce()` was called on
*   `initialValue` -optional. object to used as the first argument to the first call of the callback
* Returns: the value of the last callback invocation
* Example:
```javascript
[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}); //`reduce` will return 10 here.
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
can also flatten an array of arrays:
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
```

### [Iterator Method: Array.prototype.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)
* summary: `reduceRight()` applies a function against an accumulator and each value of the array has to reduce it to a single value
* syntax: `arr.reduceRight(callback[, initialValue])`
* parameters:
*   `callback:` -function to execute on each value in the array. takes four arguments:
*       `previousValue` -the value previously returned in the last invocatio of the callback, or initialValue, if one is supplied
*       `currentValue` -the current element being processed
*       `index` -the index of the element being processed
*       `array` -the array `reduce()` is called on
*   `initialValue` -optional. object to use as the first argument to the first call of the `callback`
* Returns: returns the value of the last invocation of the callback
* Examples:
```javascript
//adding the values within the array
var total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// total == 6
//flattening an array of arrays
var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
    return a.concat(b);
}, []);
// flattened is [4, 5, 2, 3, 0, 1]



### [Literal: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

* *symbol:* `[ ]`
* *pronunciation:* "array", "new array"
* *examples:*
```javascript
// New empty Array  [  ]
// New Array with some elements [element0, element1, element2, element3...]
// Any other way to do it?  new Array(element0, element1, element2, element3...)
```

### [Array.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

* *symbol:* `arr.length`
* *value:* `Number` of elements in the array
* *examples:*
```javascript
var numbers = [1, 2, 3, 4, 5]  for(var i =0; i < numbers.length; i++) { numbers[i] *= 2;} changes elements in array to [2, 4, 6, 8, 10]
```

### [Mutator Method: Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* *symbol:* `arr.pop()`
* *result:* removes the last element from the array and provides the value to the caller
* *parameters:* does it have any? Nope!
* *returns:* any type of item allowed in an array (string, number, boolean, even another array)
* *examples:*
```javascript
var fruits = ["Banana", "Strawberry", "Apple", "Orange"];   fruits(pop); fruits = Banana, Strawberry, Apple ----  var popped = fruits.pop()
```

### [Mutator Method: Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* *symbol:* ``arr.push(element1, element2, element3....)`
* *result:* adds one or more elements to end of array and returns the new length of the array
* *parameters:* elementN (the elements to add to the end of the array)
* *returns:* returns the new length property of the object that it was used on
* *examples:*
```javascript
var foods = ["pizza", "tacos"];  ---  var foodstotal = foods.push("chicken", "sandwiches"); array now is ["pizza", "tacos", "chicken", "sandwiches"]
```

### [Mutator Method: Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

* *symbol:* `arr.reverse()`
* *result:* reverses the order of the elements in an array
* *parameters:* None!
* *returns:* returns the elements in the array in reverse order
* *examples:*
``javascript
var anArray = "["A", "B", "C", "D"];   ----  anArray.reverse(); --- anArray is now: ["D", "C", "B", "A"]
```

### [Mutator Method: Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

* *symbol:* `arr.shift()`
* *result:* removes the first element (position 0) from an array, changes the length of the array
* *returns:* returns the value that was removed from the array
* *examples:*
```javascript
var animals = ['horse', 'cow', 'chicken', 'pig']; --- animals.shift(); // horse has been removed from the array
```

### [Mutator Method: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

* *symbol:* `arr.sort([compareFunction])`
* *result:* sorts the elements in the array and returns the array in sort order according to unicode code points (http://www.utf8-chartable.de/)
* *returns:* the sorted array
* *parameters:* compareFunction (optional: a function that defines the sort order)
* *examples:*
```javascript
var stringArray = ["Blue", "Humpback", "Beluga"]; -- stringArray.sort(); // will give you Blue, Humpback, Beluga
```

### [Mutator Method: Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

* *symbol:* `array.splice(start, deleteCount[, item1[, item2[, ...]]])`
* *result:* changes the content of an array by removing existing and adding new elements
* *parameters:* start: where to start the changes, deleteCount: the number of elements to remove, itemN: the element to add to the array
* *returns:* an array containing the deleted elements
* *examples:*
```javascript
var fish = ["angel", "clown", "mandarin", "sturgeon"]; --  var removed = fish.splice(2, 0, "drum"); // fish = ["angel", clown", "drum", "mandarin", "sturgeon"] because 0, nothing was removed. alternately: var removed = fish.splice(3, 1); // fish = ["angel", "clown", "drum", "sturgeon"]; -- mandarin was removed from index 3, nothing was removed
```

### [Mutator Method: Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

* *symbol:* `arr.unshift([element1[, ...[, elementN]]])`
* *result:* adds one or more elements to the beginning of an array and returns the new length
* *parameters:* elementN - the elements to add to the front of the array
* *returns:* returns the new length of the array
* *examples:*
```javascript
var arr = [1, 2]; -- arr.unshift(0); // result is 3, new array length // arr = [0, 1, 2] -----  arr.unshift(-2, -1); results is 5, new array length // arr = [-2, -1, 0, 1, 2]

```
