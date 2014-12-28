describe('Kit library', function () {
    var should = require('chai').should(),
        expect = require('chai').expect,
        _ = require('../src/kit.js');

    describe('#merge()', function () {
        it('Should merge multiple objects to one', function () {
            var merged = _.merge(
                { a: 'a', b: 'b', c: ['a', 'b', 'c'] },
                { a: { a: 'a', b: 'b', c: ['a', 'b', 'c'] }, d: 'd'},
                { b: { a: { a: 'a', b: 'b', c: ['a', 'b', 'c'] } } },
                { b: { a: { a: 'a', e: 'e', c: ['c', 'a', 'b'] } } }
            );

            merged.should.deep.equal({
                a: { a: 'a', b: 'b', c: [ 'a', 'b', 'c' ] },
                b: { a: { a: 'a', b: 'b', c: ['c', 'a', 'b'], e: 'e' } },
                c: [ 'a', 'b', 'c' ],
                d: 'd'
            });
        });

        it('Should return empty object if no object is added', function () {
            var merged = _.merge();

            merged.should.deep.equal({});
        });
    });

    describe('#each()', function () {
        it('Should loop through array passed', function () {
            var a = ['a', 'b', 'c'];

            _.each(a, function (item) {
                if (item === 'a') {
                    item.should.equal(a[0]);
                } else if (item === 'b') {
                    item.should.equal(a[1]);
                } else if (item === 'c') {
                    item.should.equal(a[2]);
                }
            });
        });
    });

    describe('#first()', function () {
        it('Should return first element of passed array', function () {
            var a = ['a', 'b', 'c', 'd'],
                first = _.first(a);

            first.should.equal(a[0]);
        });

        it('Should return null if empty array is passed', function () {
            var first = _.first([]);

            expect(first).to.be.null;
        });

        it('Should return null if no array is passed', function () {
            var first = _.first();

            expect(first).to.be.null;
        });
    });

    describe('#last()', function () {
        it('Should return last element of passed array', function () {
            var a = ['a', 'b', 'c', 'd'],
                last = _.last(a);

            last.should.equal(a[3]);
        });

        it('Should return null if empty array is passed', function () {
            var last = _.last([]);

            expect(last).to.be.null;
        });

        it('Should return null if no array is passed', function () {
            var last = _.last();

            expect(last).to.be.null;
        });
    });

    describe('#remove()', function () {
        it('Should remove element passed from an array', function () {
            var a = ['a', 'b', 'c', 'd'],
                removed = _.remove(a, 'b');

            removed.should.deep.equal(['a', 'c', 'd']);
        });

        it('Should remove elements passed from an array', function () {
            var a = ['a', 'b', 'c', 'd'],
                removed = _.remove(a, 'b', 'c');

            removed.should.deep.equal(['a', 'd']);
        });

        it('Should return array passed if no elements added', function () {
            var a = ['a', 'b', 'c', 'd'],
                removed = _.remove(a);

            removed.should.deep.equal(['a', 'b', 'c', 'd']);
        });
    });

    describe('#unique()', function () {
        it('Should return an unique array', function () {
            var a = ['a', 'b', 'c', 'd', 'b'],
                unique = _.unique(a);

            unique.should.deep.equal(['a', 'b', 'c', 'd']);
        });

        it('Should return null if no array is passed', function () {
            var unique = _.unique();

            expect(unique).to.be.null;
        });

        it('Should return null if empty array is passed', function () {
            var unique = _.unique([]);

            expect(unique).to.be.null;
        });
    });

    describe('#isObject()', function () {
        it('Should return true if object is passed', function () {
            expect(_.isObject({})).to.be.true;
        });

        it('Should return false if no object is passed', function () {
            expect(_.isObject('')).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isObject()).to.be.false;
        });
    });

    describe('#isFunction()', function () {
        it('Should return true if function is passed', function () {
            expect(_.isFunction(function() {})).to.be.true;
            expect(_.isFunction(new Function())).to.be.true;
        });

        it('Should return false if no function is passed', function () {
            expect(_.isFunction({})).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isFunction()).to.be.false;
        });
    });

    describe('#isUndefined()', function () {
        it('Should return true if undefined is passed', function () {
            expect(_.isUndefined(undefined)).to.be.true;
            expect(_.isUndefined(void 0)).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isUndefined({})).to.be.false;
        });

        it('Should return true if nothing is passed (undefined)', function () {
            expect(_.isUndefined()).to.be.true;
        });
    });

    describe('#isNull()', function () {
        it('Should return true if null is passed', function () {
            expect(_.isNull(null)).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isNull('string')).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isNull()).to.be.false;
        });
    });

    describe('#isArray()', function () {
        it('Should return true if an array is passed', function () {
            expect(_.isArray([])).to.be.true;
            expect(_.isArray(new Array())).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isArray('string')).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isArray()).to.be.false;
        });
    });

    describe('#isDate()', function () {
        it('Should return true if a date is passed', function () {
            expect(_.isDate(new Date())).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isDate([])).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isDate()).to.be.false;
        });
    });

    describe('#isRegExp()', function () {
        it('Should return true if a regex is passed', function () {
            expect(_.isRegExp(new RegExp())).to.be.true;
            expect(_.isRegExp(/a-z/)).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isRegExp([])).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isRegExp()).to.be.false;
        });
    });

    describe('#isString()', function () {
        it('Should return true if a string is passed', function () {
            expect(_.isString('I AM STRING')).to.be.true;
            expect(_.isString(new String())).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isString([])).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isString()).to.be.false;
        });
    });

    describe('#isNumber()', function () {
        it('Should return true if a number is passed', function () {
            expect(_.isNumber(213123.23123)).to.be.true;
            expect(_.isNumber(new Number())).to.be.true;
            expect(_.isNumber(2)).to.be.true;
            expect(_.isNumber(0)).to.be.true;
            expect(_.isNumber(-2)).to.be.true;
            expect(_.isNumber(-2.2)).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isNumber([])).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isNumber()).to.be.false;
        });
    });

    describe('#isInteger()', function () {
        it('Should return true if an integer is passed', function () {
            expect(_.isInteger(2)).to.be.true;
            expect(_.isInteger(0)).to.be.true;
            expect(_.isInteger(-2)).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isInteger([])).to.be.false;
        });

        it('Should return false if float element is passed', function () {
            expect(_.isInteger(2.2)).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isInteger()).to.be.false;
        });
    });

    describe('#isFloat()', function () {
        it('Should return true if a float number is passed', function () {
            expect(_.isFloat(2.1)).to.be.true;
            expect(_.isFloat(-2.01)).to.be.true;
        });

        it('Should return false if other element is passed', function () {
            expect(_.isFloat([])).to.be.false;
        });

        it('Should return false if integer element is passed', function () {
            expect(_.isFloat(2)).to.be.false;
        });

        it('Should return false if nothing is passed', function () {
            expect(_.isFloat()).to.be.false;
        });
    });

    describe('#isGlobal()', function () {
        it('Should return true if a global object is passed', function () {
            expect(_.isGlobal(global)).to.be.true;
        });
    });
});


/*
assert.equal(_.isObject({}), true, 'Assert isObject({}) should return true');
assert.equal(_.isFunction(function() {}), true, 'Assert isFunction(function() {}) should return true');
assert.equal(_.isUndefined(test), true, 'Assert isUndefined(test) should return true');
assert.equal(_.isArray(['a', 'b', 'c', 'd']), true, 'Assert isArray(["a", "b", "c", "d"]) should return true');
assert.equal(_.isDate(new Date()), true, 'Assert isDate(new Date) should return true');
assert.equal(_.isRegExp(/a-z/), true, 'Assert isRegExp(/a-z/) should return true');
assert.equal(_.isString('its a string! 1+1'), true, 'Assert isString("its a string! 1+1") should return true');
assert.equal(_.isNumber(1), true, 'Assert isNumber(1) should return true');
assert.equal(_.isNumber(1.2), true, 'Assert isNumber(1.2) should return true');
assert.equal(_.isNumber(-1.2), true, 'Assert isNumber(-1.2) should return true');
assert.equal(_.isInteger(1), true, 'Assert isInteger(1) should return true');
assert.equal(_.isInteger(1.0), true, 'Assert isInteger(1.0) should return true');
assert.equal(_.isInteger(1.1), false, 'Assert isInteger(1.1) should return false');
assert.equal(_.isInteger('1'), false, 'Assert isInteger("1") should return false');
assert.equal(_.isInteger([]), false, 'Assert isInteger([]) should return false');
assert.equal(_.isGlobal(global), true, 'Assert isGlobal(global) should return true');
};

if (module == require.main) {
require('test').run(exports);
}
*/
