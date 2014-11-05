//  http://github.com/bjarneo/kit
//  (c) 2014- Bjarne Øverli

(function() {
    var _ = this._ || {};

    // Objects

    // Merge multiple objects to one
    _.merge = function(object) {
        var i = 1, key;

        for (; i < arguments.length; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    object[key] = arguments[i][key];
                }
            }
        }

        return object;
    };

    window._ = _;
})();