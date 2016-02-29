myApp.factory('DataFactory', ['$http', function($http){
    var animals = undefined;
    var numAnimals;

    var getData = function() {
        console.log('getting data from server');
        var promise = $http.get('/data').then(function(response) {
            animals = response.data;
            console.log('Async data response:', animals);
            numAnimals = animals.length;
            console.log(numAnimals);
        });
        console.log('this is the promise ', promise);
        return promise;
    };

    var addAnimal = function(animal) {
        //animals.push(animal);
        $http({
            method: 'POST',
            url: '/data/',
            data: animal
        }).then(function(response) {
            console.log(response.data);
        });
    };

    var numAnimals = getData().length;

    var countFavorites = function() {
        if(animals === undefined) {
            getData().then(function() {
                return animals.length;
            });
        } else {
            return animals.length;
        }
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
        //animalCount: function (){
        //    return countFavorites();
        // },
        //count: numAnimals
    };

    return publicApi;
}]);