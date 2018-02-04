module.exports = ['$scope', 'Factory',($scope, Factory) ->
    $scope.msg = 'hello world!' + Factory.now();
];