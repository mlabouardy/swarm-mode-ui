var SwarmService = function(Restangular){

    this.getWorkers = function() {
        return Restangular.oneUrl('workers').get();
    };

    this.getManagers = function() {
        return Restangular.oneUrl('managers').get();
    };

    this.getServices = function() {
        return Restangular.oneUrl('services').get();
    };

    this.getTasks = function() {
        return Restangular.oneUrl('tasks').get();
    };

    this.getNodeName = function(name){
        return Restangular.oneUrl('nodes/'+name).get();
    };
};

angular.module('app.services')
    .service('SwarmService', SwarmService);