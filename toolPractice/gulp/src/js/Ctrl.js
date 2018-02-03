module.exports = ['$scope', 'Factory', function ($scope, Factory) {
    $scope.msg = 'hello world!' + Factory.now();
}];