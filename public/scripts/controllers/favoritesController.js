myApp.controller('favoritesController', ['$scope', 'DataFactory', function($scope, dataFactory) {
    console.log('Favorites Controller');
    $scope.animals = [];
    $scope.dataFactory = dataFactory;

    dataFactory.retrieveData().then(function() {
        $scope.animals = dataFactory.animalsData();
    });
}]);