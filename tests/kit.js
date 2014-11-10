var _ = require('./../src/kit.js');

exports['test that logs kit framework'] = function(assert) {
    var merge = _.merge(
        { a: 'aa' },
        { a: 'aaa' },
        { a: 'aa' },
        { a: 'aa' }
    );
    
    assert.equal(merge.a, 'aa', 'Assert merge should be true');
    
    assert.equal(_.isObject({}), true, 'Assert isObject should be true');
    assert.equal(_.isObject(function() {}), false, 'Assert isObject should be false');
    
    assert.equal(_.isFunction(function() {}), true, 'Assert isFunction should be true');
    assert.equal(_.isFunction(_), false, 'Assert isFunction should be false');
;}

if (module == require.main) {
    require('test').run(exports);
}