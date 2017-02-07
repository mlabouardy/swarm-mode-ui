var TasksCtrl = function($scope, SwarmService) {
    $scope.tasks = [];

    SwarmService.getTasks().then(function(results){
        $scope.tasks = results.plain();
        $scope.tasks.forEach(function(task){
            task.CreatedAt = moment(task.CreatedAt).fromNow();
            SwarmService.getNodeName(task.NodeID).then(function(results){
                task.NodeName = results.plain().Description.Hostname;
            })
        })
    });

};

angular.module('app.controllers')
    .controller('TasksCtrl', TasksCtrl);