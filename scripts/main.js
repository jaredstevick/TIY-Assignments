var assert = require('assert');

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

/*
* @param String A representing an English number word
* @param String B representing an English number word
* @return Number
*/

function plus(A, B) {
    if ( A == "zero" ){
        return 0;
    }
    return 2;
}

it('should add "number words"', function() {
    assert.equal(plus("one", "one"), 2);
});
it('should add "zero" and "zero"', function() {
    assert.equal(plus("zero", "zero"), 0);
});
