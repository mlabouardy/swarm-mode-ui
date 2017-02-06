var ServicesCtrl = function($scope, SwarmService){
    $scope.services = [];

    SwarmService.getServices().then(function(results){
        $scope.services = results.plain();
    });
};

angular.module('app.controllers')
    .controller('ServicesCtrl', ServicesCtrl);