var test = require('tape'),
    _ = require('./../src/kit.js');

//curl -sSNT tests/kit-testling.js testling.com/?browsers=iexplore/7.0,iexplore/8.0,chrome/14.0
test('kit', function (t) {
    var isArray = _.isArray([]);
    t.equal(isArray, true);
    
    var isObject = _.isObject({});
    t.equal(isObject, true);
    
    var isFunction = _.isFunction(function() {});
    t.equal(isFunction, true);
    
    var a;
    var isUndefined = _.isUndefined(a);
    t.equal(isUndefined, true);
    
    var isNull = _.isNull(null);
    t.equal(isNull, true);

    var isDate = _.isDate(new Date);
    t.equal(isDate, true);
        
    var isRegExp = _.isRegExp(/a-z/);
    t.equal(isRegExp, true);
    
    var isString = _.isString('schtring');
    t.equal(isString, true);
    
    var isNumber = _.isNumber(123);
    t.equal(isNumber, true);
    
    var isInteger = _.isInteger(123);
    t.equal(isInteger, true);
    
    var isFloat = _.isFloat(1.1);
    t.equal(isFloat, true);
    
    var isGlobal = _.isGlobal(global);
    t.equal(isGlobal, true);
    
    
    t.end();
});