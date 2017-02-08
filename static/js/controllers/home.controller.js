var HomeCtrl = function(SwarmService, $scope, $location){
    $scope.workers = [];
    $scope.managers = [];

    SwarmService.getWorkers().then(function(results){
        $scope.workers = results.plain();
    });

    SwarmService.getManagers().then(function(results){
        $scope.managers = results.plain();
    });

    $scope.showNodeDetail = function(id){
        $location.path('/nodes/' + id);
    };

};

angular.module('app.controllers')
    .controller('HomeCtrl', HomeCtrl);