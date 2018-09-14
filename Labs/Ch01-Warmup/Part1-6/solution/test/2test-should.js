var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();

describe('BDD', function () {
    describe('#should', function () {

        it('should work with should', function () {

            let foo = 'bar'
                , beverages = { tea: ['chai', 'matcha', 'oolong'] };

            foo.should.be.a('string');
            foo.should.equal('bar');
            foo.should.have.lengthOf(3);
            beverages.should.have.property('tea').with.lengthOf(3);
        });
    });
          });
