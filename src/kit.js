//  This is no underscore clone. Made just for the fun.
//  http://github.com/bjarneo/kit
//  (c) 2014- Bjarne Øverli

(function (window, define) {
    'use strict';

    var _ = {};

    var ObjProto = Object.prototype,
        toString = ObjProto.toString;

    var types = {
        object: '[object Object]',
        function: '[object Function]',
        undefined: '[object Undefined]',
        null: '[object Null]',
        array: '[object Array]',
        date: '[object Date]',
        regexp: '[object RegExp]',
        string: '[object String]',
        number: '[object Number]',
        global: '[object global]'
    };

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
        if (toString.call(object) === types.object) {
            return true;
        }

        return false;
    };

    _.isFunction = function (func) {
        if (toString.call(func) === types.function) {
            return true;
        }

        return false;
    };

    _.isUndefined = function (value) {
        if (toString.call(value) === types.undefined) {
            return true;
        }

        return false;
    };

    _.isNull = function (value) {
        if (toString.call(value) === types.null) {
            return true;
        }

        return false;
    };

    _.isArray = function (array) {
        if (toString.call(array) === types.array) {
            return true;
        }

        return false;
    };

    _.isDate = function (date) {
        if (toString.call(date) === types.date) {
            return true;
        }

        return false;
    };

    _.isRegExp = function (regexp) {
        if (toString.call(regexp) === types.regexp) {
            return true;
        }

        return false;
    };

    _.isString = function (string) {
        if (toString.call(string) === types.string) {
            return true;
        }

        return false;
    };

    _.isNumber = function (number) {
        if (toString.call(number) === types.number) {
            return true;
        }

        return false;
    };

    _.isInteger = function (integer) {
        return parseInt(integer) === integer;
    };

    _.isFloat = function (number) {
        /* jshint bitwise: false */
        return number === +number && number !== (number|0);
    };

    _.isGlobal = function (input) {
        if (toString.call(input) === types.global) {
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
}());
