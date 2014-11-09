//  http://github.com/bjarneo/kit
//  (c) 2014- Bjarne Øverli

(function() {
    var _ = this._ || {};

    // Objects

    // Recursively merge multiple objects to one
    _.merge = function(object) {
        var i = 1, key;

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
    
    // Check if input is object
    _.isObject = function(object) {
        if (Object.prototype.toString.call(object) === '[object Object]') {
            return true;
        }
        
        return false;
    };

    window._ = _;
})();