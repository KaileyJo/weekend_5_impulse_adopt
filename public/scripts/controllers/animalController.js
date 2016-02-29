myApp.controller('animalController', ['$scope', '$http', 'DataFactory', function($scope, $http, dataFactory) {
    $scope.animalInfo = true;
    var favorite = [];
    $scope.animal = '';

    function animalFinder(animalVal) {
        favorite = [];
        var key = '5ac82314a4f2c2a8b046428dbca4b0fb';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + animalVal;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                $scope.animalInfo = false;
                var id = response.data.petfinder.pet.id.$t;
                var name = response.data.petfinder.pet.name.$t;
                var image = response.data.petfinder.pet.media.photos.photo[2].$t;
                var description = (response.data.petfinder.pet.description.$t).substring(0, 99);
                favorite = [id, name, image, description];
            }
        );

    }

    $scope.dataFactory = dataFactory;

    $scope.animalSearch = function() {
        if($scope.animal != '') {
            animalFinder($scope.animal);
        }
    };

    $scope.newFavorite = function() {
        console.log(favorite);
        dataFactory.newAnimal(favorite);

    //
    //    //$scope.animal = $scope.dataFactory.animalsData();
    //
    //    //$scope.addAnimal = function() {
    //    //    console.log($scope.animalName);
    //    //    $scope.dataFactory.addName($scope.animalName);
    //    //
    //    //    $scope.animalName = '';
    //    //
    //    //    //$scope.animal = $scope.dataFactory.animalData();
    //    //}
    };


}]);