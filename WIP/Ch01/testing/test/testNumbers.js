const assert = require('chai').assert;
let Numbers = require('../app/numbers');
let numbers = new Numbers();

describe('Nums', function() {
    describe('#getEvens()',function() {
        it('should',function(){
            const evens = numbers.getEvens();
            assert.include(evens, 2);
        });
    });
});


