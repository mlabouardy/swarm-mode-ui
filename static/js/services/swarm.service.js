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

    this.inspectNode = function(id){
        return Restangular.oneUrl('nodes/' + id).get();
    };

    this.inspectService = function(id) {
        return Restangular.oneUrl('services/' + id).get();
    }

    this.inspectTask = function(id) {
        return Restangular.oneUrl('tasks/' + id).get();
    }

};

angular.module('app.services')
    .service('SwarmService', SwarmService);