var HomeCtrl = function(SwarmService, $scope){
    $scope.workers = [];
    $scope.managers = [];

    SwarmService.getWorkers().then(function(results){
        $scope.workers = results.plain();
    });

    SwarmService.getManagers().then(function(results){
        $scope.managers = results.plain();
    });

};

angular.module('app.controllers')
    .controller('HomeCtrl', HomeCtrl);