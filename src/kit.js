//  This is no underscore clone. Made just for the fun.
//  http://github.com/bjarneo/kit
//  (c) 2014- Bjarne Øverli

(function () {
    'use strict';
    
    var _ = {};

    // Objects

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
    
    // Check if is node, amd or else we set it to window
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = _; 
    } else {
        if (typeof define === 'function' && define.amd) {
            define([], function() {
                return _;
            });
        } else {
            window._ = _;
        }
    }
})();