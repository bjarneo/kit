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
            return {};
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

    _.each = function (array, fn) {
        var len = array.length, i = 0;

        if (!array.length) {
            throw new TypeError('Should add an array');
        } else if (typeof fn !== 'function') {
            throw new TypeError('No callback function added.');
        }

        for (; i < len; i++) {
            /*jshint validthis:true */
            fn.call(this, array[i], i);
        }
    };

    // Arrays

    // get first element in an array
    _.first = function (array) {
        if (!array || !array.length) {
            return null;
        }

        return array[0];
    };

    // get last element in an array
    _.last = function (array) {
        if (!array || !array.length) {
            return null;
        }

        return array[array.length - 1];
    };

    // Remove as many elements you want from an array
    _.remove = function (array) {
        var len = arguments.length;

        if (!len) {
            return array;
        }

        _.each(arguments, function (arg) {
            var index = array.indexOf(arg);

            if (index > -1) {
                array.splice(index, 1);
            }
        });

        return array;
    };

    _.unique = function (array) {
        var uniqueArray = [];

        if (!array || !array.length) {
            return null;
        }

        _.each(array, function (item) {
            if (uniqueArray.indexOf(item) === -1) {
                uniqueArray.push(item);
            }
        });

        return uniqueArray;
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
