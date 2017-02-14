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
            .when('/services/:id',{
                templateUrl: '/static/partials/service.html',
                controller: 'ServiceCtrl'
            })
            .when('/tasks',{
                templateUrl: '/static/partials/tasks.html',
                controller: 'TasksCtrl'
            })
            .when('/tasks/:id',{
                templateUrl: '/static/partials/task.html',
                controller: 'TaskCtrl'
            })
            .when('/nodes/:id',{
                templateUrl: '/static/partials/node.html',
                controller: 'NodeCtrl'
            })
            .otherwise({redirectTo: '/'});
    })