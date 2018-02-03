(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = ['$scope', 'Factory', function ($scope, Factory) {
    $scope.msg = 'hello world!' + Factory.now();
}];
},{}],2:[function(require,module,exports){
module.exports = [function () {
    return {
        restrict: 'EA',
        template: '<div>hahah</div>',
        link: function () {
            
        }
    };
}];
},{}],3:[function(require,module,exports){
module.exports = [function () {
    return {
        now: function () {
            return new Date();
        }
    };
}];
},{}],4:[function(require,module,exports){
angular
    .module('app', [])
    // .controller('Ctrl', Ctrl)
    .controller('Ctrl', require('./Ctrl.js'))
    // .factory('Factory', Factory)
    .factory('Factory', require('./Factory.js'))
    // .directive('hl', Directive);
    .directive('hl', require('./Directive.js'));
},{"./Ctrl.js":1,"./Directive.js":2,"./Factory.js":3}]},{},[4]);
