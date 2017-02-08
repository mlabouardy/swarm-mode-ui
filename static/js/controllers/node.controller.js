var NodeCtrl = function($routeParams, $scope, SwarmService){
    SwarmService.getNodeName($routeParams.id).then(function(results){
        $scope.info = results.plain();
    });
};

angular.module('app.controllers')
    .controller('NodeCtrl', NodeCtrl);