var ServiceCtrl = function($routeParams, $scope, SwarmService){
    SwarmService.inspectService($routeParams.id).then(function(results){
        $scope.info = results.plain();
        $scope.info.CreatedAt = moment($scope.info.CreatedAt).fromNow();
    });
};

angular.module('app.controllers')
    .controller('ServiceCtrl', ServiceCtrl);