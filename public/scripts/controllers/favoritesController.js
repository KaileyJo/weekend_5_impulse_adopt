myApp.controller('favoritesController', ['$scope', 'DataFactory', function($scope, dataFactory) {
    console.log('Favorites Controller');
    $scope.animals = [];
    $scope.dataFactory = dataFactory;
    $scope.favCount = dataFactory.animalCount();

    //if(dataFactory.animalsData() === undefined) {
        dataFactory.retrieveData().then(function() {
            $scope.animals = dataFactory.animalsData();
        });
    //} else {
    //    $scope.animals = dataFactory.animalsData();
    //    //dataFactory.retrieveData();
    //}

    //dataFactory.retrieveData();
}]);