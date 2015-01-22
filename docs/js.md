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
