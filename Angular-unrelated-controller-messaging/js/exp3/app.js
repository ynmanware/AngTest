(function(app) {

    function SharedService() {
        this.user = {};
    }
 
    function Controller1(SharedService) {
        this.sharedService = SharedService;
    }

    
    function Controller2(SharedService) {
        this.sharedService = SharedService;
    }

    app.service('SharedService', SharedService);
    app.controller('Controller1', Controller1);
    app.controller('Controller2', Controller2);

})(angular.module('myApp', []));