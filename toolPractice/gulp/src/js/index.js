angular
    .module('app', [])
    // .controller('Ctrl', Ctrl)
    .controller('Ctrl', require('./Ctrl.js'))
    // .factory('Factory', Factory)
    .factory('Factory', require('./Factory.js'))
    // .directive('hl', Directive);
    .directive('hl', require('./Directive.js'));