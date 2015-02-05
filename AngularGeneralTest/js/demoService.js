angular.module('demoService', []).factory('DemoService', function($rootScope) {
    var service = {};
    service.topValue = 0;
    service.middleValue = 0;
    service.bottomValue = 0;

    service.data = {};
    service.data.topValue = 0;
    service.data.middleValue = 0;
    service.data.bottomValue = 0;

    service.updateTopValue = function(value) {
        this.topValue = value;
        this.data.topValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updateMiddleValue = function(value) {
        this.middleValue = value;
        this.data.middleValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    service.updateBottomValue = function(value) {
        this.bottomValue = value;
        this.data.bottomValue = value;
        $rootScope.$broadcast("valuesUpdated");
    }

    return service;
});

angular.module('demo', ['demoService']);