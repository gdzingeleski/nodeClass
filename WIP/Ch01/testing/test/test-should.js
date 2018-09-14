let chai = require('chai'),expect = chai.expect, should = chai.should();

describe('BDD', function() {
    describe('#should',function() {
        it('should work with should', function () {

            let foo = 'bar'
                , beverages = { tea: ['chai', 'matcha', 'oolong'] };

            foo.should.be.a('string');//pass a string for correct datatype
            foo.should.equal('bar');//pass a string value
            foo.should.have.lengthOf(3);//pass a number value
            beverages.should.have.property('tea').with.lengthOf(3);//pass  value and length
        });
    });
});
