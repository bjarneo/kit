//  This is no underscore clone. Made just for the fun.
//  http://github.com/bjarneo/kit
//  (c) 2014- Bjarne Øverli

(function () {
    'use strict';
    
    var _ = {};

    // Recursively merge multiple objects to one
    _.merge = function (object) {
        var i = 1, key;
        
        if (!arguments.length) {
            throw 'Error: No objects added to merge method!';
        }

        for (; i < arguments.length; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    if (this.isObject(arguments[i][key])) {
                        if (!this.isObject(object[key])) {
                            object[key] = {};
                        }
                        
                        object[key] = this.merge(object[key], arguments[i][key]);
                    } else {
                        object[key] = arguments[i][key];
                    }
                }
            }
        }

        return object;
    };
    
    _.isObject = function (object) {
        if (Object.prototype.toString.call(object) === '[object Object]') {
            return true;
        }
        
        return false;
    };
    
    _.isFunction = function (func) {
        if (Object.prototype.toString.call(func) === '[object Function]') {
            return true;
        }
        
        return false;
    };
    
    _.isUndefined = function (value) {
        if (Object.prototype.toString.call(value) === '[object Undefined]') {
            return true;
        }
        
        return false;
    };
    
    _.isNull = function (value) {
        if (Object.prototype.toString.call(value) === '[object Null]') {
            return true;
        }
        
        return false;
    };
    
    _.isArray = function (array) {
        if (Object.prototype.toString.call(array) === '[object Array]') {
            return true;
        }
        
        return false;
    };
    
    _.isDate = function (date) {
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return true;
        }
        
        return false;
    };
    
    _.isRegExp = function (regexp) {
        if (Object.prototype.toString.call(regexp) === '[object RegExp]') {
            return true;
        }
        
        return false;
    };
    
    _.isString = function (string) {
        if (Object.prototype.toString.call(string) === '[object String]') {
            return true;
        }
        
        return false;
    };
    
    _.isNumber = function (number) {
        if (Object.prototype.toString.call(number) === '[object Number]') {
            return true;
        }
        
        return false;
    };
    
    _.isInteger = function (integer) {
        return parseInt(integer) === integer;
    };
    
    _.isFloat = function (number) {
            return number === +number && number !== (number|0);
    };
    
    _.isGlobal = function (input) {
        if (Object.prototype.toString.call(input) === '[object global]') {
            return true;
        }
        
        return false;
    };
    
    // Check if is node, amd or else we set it to window
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = _; 
    } else if (typeof define === 'function' && define.amd) {
        define([], function() {
                return _;
        });
    } else {
        window._ = _;
    }
})();