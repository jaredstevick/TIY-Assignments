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
