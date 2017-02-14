var TasksCtrl = function($scope, SwarmService, $location) {
    $scope.tasks = [];

    SwarmService.getTasks().then(function(results){
        $scope.tasks = results.plain();
        $scope.tasks.forEach(function(task){
            task.CreatedAt = moment(task.CreatedAt).fromNow();
            SwarmService.inspectNode(task.NodeID).then(function(results){
                task.NodeName = results.plain().Description.Hostname;
            })
        })
    });

    $scope.showTaskDetail = function(id){
        $location.path('/tasks/' + id);
    }

};

angular.module('app.controllers')
    .controller('TasksCtrl', TasksCtrl);