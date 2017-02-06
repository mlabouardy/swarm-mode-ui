var TasksCtrl = function($scope, SwarmService) {
    $scope.tasks = [];

    SwarmService.getTasks().then(function(results){
        $scope.tasks = results.plain();
    });
};

angular.module('app.controllers')
    .controller('TasksCtrl', TasksCtrl);