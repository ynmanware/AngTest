(function(app) {

    function SharedService() {
        this.user = {};
    }
      angular.extend(SharedService.prototype, {
        getUser: function() {
            return this.user;
        },
        setUser: function(user) {
            this.user = user;
        }
    });
    
    function Controller1(SharedService) {
        this.sharedService = SharedService;
    }

      Object.defineProperty(Controller1.prototype,
            'userAge', {
                enumerable: true, //indicate that it supports enumerations
                configurable: false, //disable delete operation
                get: function() {
                    return this.sharedService.getUser().age;
                },
                set: function(val) {
                    this.sharedService.getUser().age=val;
                }
            });

    Object.defineProperty(Controller1.prototype,
            'userLoggedIn', {
                enumerable: true, //indicate that it supports enumerations
                configurable: false, //disable delete operation
                get: function() {
                    return this.sharedService.getUser().loggedIn;
                },
                set: function(val) {
                    this.sharedService.getUser().loggedIn=val;
                }
            });

    
    function Controller2(SharedService) {
        this.sharedService = SharedService;
    }

    Object.defineProperty(Controller2.prototype,
            'userAge', {
                enumerable: true, //indicate that it supports enumerations
                configurable: false, //disable delete operation
                get: function() {
                    return this.sharedService.getUser().age;
                },
                set: function(val) {
                    this.sharedService.getUser().age=val;
                }
            });

    Object.defineProperty(Controller2.prototype,
            'userLoggedIn', {
                enumerable: true, //indicate that it supports enumerations
                configurable: false, //disable delete operation
                get: function() {
                    return this.sharedService.getUser().loggedIn;
                },
                set: function(val) {
                    this.sharedService.getUser().loggedIn=val;
                }
            });

    
    app.service('SharedService', SharedService);
    app.controller('Controller1', Controller1);
    app.controller('Controller2', Controller2);

})(angular.module('myApp', []));