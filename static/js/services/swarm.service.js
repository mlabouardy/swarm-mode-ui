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
};

angular.module('app.services')
    .service('SwarmService', SwarmService);