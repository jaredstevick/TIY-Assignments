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


### [`_.where`](https://lodash.com/docs#where)

* _params:_
  * `Array`|`Object`|`String` `collection` to search
  * `Object` `source` the object of property values to match
* _returns:_
  * returns a new filtered array with the elements that match the property searched for
* _differences:_
  * i don't think there's anything like this built it
