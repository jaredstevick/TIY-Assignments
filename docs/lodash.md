### [`_.every`](http://lodash.com/docs#every)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate` considered for each iteration
    * a callback `Function`
      * is invoked with: `value`, `index`|`key`, `collection`
      * should return `Boolean` whether iteration passes `predicate`
    * an `Object` is compared like [`_.matches`](http://lodash.com/docs#matches)
    * a `String` is compared like [`_.property`](http://lodash.com/docs#property)
  * `thisArg` binding for `predicate`
* _returns:_
  * `Boolean` whether `predicate` passes for every `value` in `collection`
* _differences:_
  * not just for `Array`; can be run with `Object` and `String` as `collection`
  * `predicate` can be `Object` or `String`...?


### [`_.reject`](https://lodash.com/docs#reject)

* _params:_
  * `Array`|`Object`|`String` `collection` to iterate over
  * `Function`|`Object`|`String` `predicate=_.idenity` the function invoked per iteration.
    * if a property name is provided, it is used to create a `.property`
    * if an object is provided, `.matches` style callback is created
 * `thisArg` binding for `predicate`
* _returns:_  the new filtered array
* _differences:_
  * basically the opposite of filter - returns a new array with the elements that predicate does not return truthy for


### [`_.where(collection, source`](https://lodash.com/docs#where)

* _params:_
  * `Array`|`Object`|`String` `collection` to search
  * `Object` `source` the object of property values to match
* _returns:_
  * returns a new filtered array with the elements that match the property searched for
* _differences:_
  * i don't think there's anything like this built it


### [`_.indexOf()`](http://devdocs.io/lodash/index#indexOf)

* _params:_
  * `Array`|`Value`|`[fromIndex=0]` the array to search, the value to search for, and the index to start from, true will perform a binary search on a sorted array
* _returns:_ returns the index of the matched value, if none, returns -1
* _differences:_
  * the built in indexOf() only has a fromIndex(start position), lodash version also adds boolean capabilities
  * lodash uses `SameValueZero` for strict equality comparisons ===


### [`_.forEach(collection, [iteratee=_.identity], [thisArg])`](https://lodash.com/docs#forEach)

* _params:_
  * `Array`|`Object`|`string` collection to iterate over
  * `Function` `[iteratee=_.identity]` the function invoked per iteration
 * `[thisArg]` the `this` binding of iteratee
* _returns:_
  `Array`|`Object`|`string` returns `collection`
* _differences:_
  * i'm not really sure to be honest


### [`_.some(collection, [predicate=_.identity], [thisArg])`](https://lodash.com/docs#some)

* _params:_
  * `Array`|`Object`|`string` the collection to iterate over
  * `Function`|`Object`|`string` `[predicate=_.identity]` the function invoked per iteration.
   * if a property name of object is provided, it is used to create a ".property" or ".matches" style callback
 * [thisArg] the this binding of predicate
* _returns:_
    * Boolean - returns true is any element passes the predicate check, otherwise - false
* _differences:_
  * _.some returns truthy for any element in the collection and does not iterate over the entire collection.  it returns as soon as it finds a passing value


### [`_.filter(collection, [predicate=_.identity], [thisArg]`](https://lodash.com/docs#filter)

* _params:_
  * `Array`|`Object`|`string` the collection to iterate over
  * `Function`|`Object`|`string` `[predicate=_.identity]` the function invoked per iteration.
   * if a property name of object is provided, it is used to create a ".property" or ".matches" style callback
 * [thisArg] the this binding of predicate
* _returns:_
  * returns the new filtered array
* _differences:_
  * it definitely requires way less typing lol, apparently it also loads faster according to the googles


### [`_.map(collection, [iteratee=_.identity], [thisArg])`](https://lodash.com/docs#map)

* _params:_
  * `Array`|`Object`|`string` the collection to iterate over
  * `Function`|`Object`|`string` `[predicate=_.identity]` the function invoked per iteration.
   * if a property name of object is provided, it is used to create a ".property" or ".matches" style callback
  * [thisArg] the this binding of predicate
* _returns:_
  * returns the new mapped array
* _differences:_
  * creates an array of values by running each element in collection through iteratee. iterateee is bound to `thisArg` and is invoked with three arguments. `.property style` returns the property value of the given element


### [`_.reduce(collection, [iteratee=_.identity], [accumulator], [thisArg])`](https://lodash.com/docs#reduce)

* _params:_
  * `Array`|`Object`|`string` the collection to iterate over
  * `Function`|`Object`|`string` `[predicate=_.identity]` the function invoked per iteration.
  * `[]accumulator` the initial value
  * [thisArg] the this binding of predicate
* _returns:_
  * returns the new mapped array
* _differences:_
  * reduces the `collection` to a value which is the accumulated result of running each element in the `collection`  - each successive invocation is started with the return value of the previous invocation. if no `accumulator` is provided, the first element of `collection` is used as the initial value invoked with: (accumulator, value, index|key, collection)


### [`_.reduceRight(collection, [iteratee=_.identity], [accumulator], [thisArg])`](https://lodash.com/docs#reduceRight)

* _params:_
   * `Array`|`Object`|`string` the `collection` to iterate over
   * `Function` `[iteratee=_.identity]` the function invoked per iteration.
   * `[]accumulator` the initial value
   * [thisArg] the this binding of iteratee
* _returns:_
  * returns the accumulated value
* _differences:_
  * the same as reduce except runs from right to left.  like reduce, it's a little different from the built in reduce

### [`_.slice(array, [start=0])`](https://lodash.com/docs#slice)

* _params:_
  * `Array` the array to slice
  * `[start=0]` `(number)` the start position
  * `[end=array.length]` the end position
* _returns:_ the slice of `array`
* _differences:_
  * this function is used to support node lists in crappy web browsers to make sure that dense arrays are returned, not shallow copies


### [`_.forEach(collection, [iteratee=_.identity], [thisArg])`](https://lodash.com/docs#forEach)

* _params:_
  * `Array`|`Object`|`string` the `collection` to iterate over
  * `Function` `[iteratee=_.identity]`  the function invoked per iteration.
  * [thisArg] the this binding of iteratee
* _returns:_
  * `Array|Object|string` returns `collection`
* _differences:_
  * iterates over elements of `collection` invoking the `iteratee` for each element. `iteratee` is bound to `thisArg` and invoked with  `(value, index|key, collection)`
