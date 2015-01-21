var assert = require('assert');

/**
 * @param Number A
 * @param Number B
 * @return sum of A and B
 */
function add(A, B){
    return A + B;
}
console.log(add(4, 5));

assert(add(1, 1), 3);
assert(add(4, 7));


/**
 * @param Number A
 * @param Number B
 * @return difference of A and B
 */
function diff(A, B){
    return A - B;
}
console.log(diff(4, 7));
assert(diff(5, 2));



/**
 * @param Number A
 * @param Number B
 * @return product of A times B
 */
function prod(A, B){
    return A * B;
}
console.log(prod(2,3));
assert(prod(4, 5));
assert(prod(11, 2));


/**
 * @param Number A
 * @param Number B
 * @return division of A by B
 */
function div(A, B){
    return A / B;
}
console.log(div(12, 3));
assert(div(10, 5));
assert(div(6, 2));
