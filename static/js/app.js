angular.module('app', ['ngRoute', 'app.controllers'])
    .config(function($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: '/static/partials/home.html',
                controller : 'HomeCtrl'
            })
            .when('/services',{
                templateUrl: '/static/partials/services.html',
                controller: 'ServicesCtrl'
            })
            .otherwise({redirectTo: '/'});
    })