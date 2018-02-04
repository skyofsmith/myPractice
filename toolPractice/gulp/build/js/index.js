(function() {
  var _, angular;

  angular = require('angular');

  _ = require('lodash');

  // .controller('Ctrl', Ctrl)
  // .factory('Factory', Factory)
  // .directive('hl', Directive);
  angular.module('app', []).controller('Ctrl', require('./Ctrl.js')).factory('Factory', require('./Factory.js')).directive('hl', require('./Directive.js'));

}).call(this);
