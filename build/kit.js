!function(){"use strict";var t={};t.merge=function(t){for(var e,r=1;r<arguments.length;r++)for(e in arguments[r])arguments[r].hasOwnProperty(e)&&(this.isObject(arguments[r][e])?(this.isObject(t[e])||(t[e]={}),t[e]=this.merge(t[e],arguments[r][e])):t[e]=arguments[r][e]);return t},t.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)?!0:!1},window._=t}();