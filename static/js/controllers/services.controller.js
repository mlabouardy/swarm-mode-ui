var ServicesCtrl = function($scope, SwarmService, $location){
    $scope.services = [];

    SwarmService.getServices().then(function(results){
        $scope.services = results.plain();
    });

    $scope.showServiceDetail = function(id){
        $location.path('/services/' + id);
    };
};

angular.module('app.controllers')
    .controller('ServicesCtrl', ServicesCtrl);