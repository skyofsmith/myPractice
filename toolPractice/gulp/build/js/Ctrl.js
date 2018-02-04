(function() {
  module.exports = [
    '$scope',
    'Factory',
    function($scope,
    Factory) {
      return $scope.msg = 'hello world!' + Factory.now() + '';
    }
  ];

}).call(this);
