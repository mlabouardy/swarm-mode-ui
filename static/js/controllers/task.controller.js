var TaskCtrl = function($routeParams, $scope, SwarmService){

    SwarmService.inspectTask($routeParams.id).then(function(results){
       $scope.info = results.plain();
       SwarmService.inspectNode($scope.info.NodeID).then(function(results){
            $scope.info.NodeName = results.plain().Description.Hostname;
       })
       SwarmService.inspectService($scope.info.ServiceID).then(function(results){
            $scope.info.ServiceName = results.plain().Spec.Name
       })
       $scope.info.CreatedAt = moment($scope.info.CreatedAt).fromNow();
       $scope.info.UpdatedAt = moment($scope.info.UpdatedAt).fromNow();
    });
};


angular.module('app.controllers')
    .controller('TaskCtrl', TaskCtrl);