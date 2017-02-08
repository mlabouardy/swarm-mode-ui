var ServiceCtrl = function($routeParams, $scope, SwarmService){
    SwarmService.inspectService($routeParams.id).then(function(results){
        $scope.info = results.plain();
    });
};

angular.module('app.controllers')
    .controller('ServiceCtrl', ServiceCtrl);