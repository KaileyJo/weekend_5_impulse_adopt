myApp.factory('DataFactory', ['$http', function($http){
    var animals = undefined;

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data').then(function(response) {
            animals = response.data;
            console.log('Async data response:', animals);
        });
        return promise;
    };

    var addAnimal = function(animal) {
        $http({
            method: 'POST',
            url: '/data/',
            data: animal
        }).then(function(response) {
            console.log(response.data);
        });
    };

    var publicApi = {
        retrieveData: function() {
            return getData();
        },
        animalsData: function(){
            return animals;
        },
        newAnimal: function(animal) {
            addAnimal(animal);
        }
    };

    return publicApi;
}]);