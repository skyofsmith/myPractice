angular
    .module('app', [])
    .controller('Ctrl', require('./Ctrl.js'))
    .factory('Factory', require('./Factory.js'))
    .directive('Directive', require('./Directive.js'));