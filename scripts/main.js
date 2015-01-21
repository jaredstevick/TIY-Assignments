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

assert.equal(add(1, 1), 3);


/**
 * @param Number A
 * @param Number B
 * @return difference of A and B
 */
function diff(A, B){
    return A - B;
}

/**
 * @param Number A
 * @param Number B
 * @return product of A times B
 */
function prod(A, B){
    return A * B;
}

/**
 * @param Number A
 * @param Number B
 * @return division of A by B
 */
function div(A, B){
    return A / B;
}
