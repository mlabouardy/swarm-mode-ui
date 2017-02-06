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
            .when('/tasks',{
                templateUrl: '/static/partials/tasks.html',
                controller: 'TasksCtrl'
            })
            .otherwise({redirectTo: '/'});
    })