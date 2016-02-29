var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'animalController'
        })
        .when('/favorites', {
            templateUrl: '/views/templates/favorites.html',
            controller: 'favoritesController'
        })
        .when('/animal', {
            templateUrl: '/views/templates/animal.html',
            controller: 'animalController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);