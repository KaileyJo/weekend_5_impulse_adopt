myApp.controller('favoritesController', ['$scope', 'DataFactory', function($scope, dataFactory) {
    console.log('Favorites Controller');

    $scope.animals = [];
    $scope.dataFactory = dataFactory;
    $scope.message = 'Animals!';

    if($scope.dataFactory.animalsData() === undefined) {
        // initial load
        $scope.dataFactory.retrieveData().then(function() {
            $scope.animals = $scope.dataFactory.animalsData();
        });
    } else {
        $scope.animals = $scope.dataFactory.animalsData();
    }

    $scope.addAnimal = function() {
        $scope.dataFactory.newAnimal($scope.formName);
        $scope.formName = '';
    };

}]);