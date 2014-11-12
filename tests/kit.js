var _ = require('./../src/kit.js');

exports['test kit framework'] = function(assert) {
    var merge = _.merge(
        { a: 'aa', b: { bb: 'bbb' } },
        { a: 'aaa' },
        { a: { aa: 'aaa'} },
        { a: 'aa', b: { bb: 'bbbb' } }
    ), test;
    
    assert.equal(merge.a, 'aa', 'Assert merge.a === "aa" should return true');
    assert.equal(merge.b.bb, 'bbbb', 'Assert merge.b.bb === "bbbb" should return true');
    assert.equal(_.isObject({}), true, 'Assert isObject({}) should return true');
    assert.equal(_.isFunction(function() {}), true, 'Assert isFunction(function() {}) should return true');
    assert.equal(_.isUndefined(test), true, 'Assert isUndefined(test) should return true');
    assert.equal(_.isArray(['a', 'b', 'c', 'd']), true, 'Assert isArray(["a", "b", "c", "d"]) should return true');
    assert.equal(_.isDate(new Date), true, 'Assert isDate(new Date) should return true');
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