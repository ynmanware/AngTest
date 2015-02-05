(function () {
    var app = angular.module('myApp', []);
    
    function BadController($scope) {
        
        $scope.notValid = function () {
            var bad = !!$scope.name;
            return !bad || $scope.name.length < 1;
        };
        
        $scope.greetMe = function () {
            if ($scope.notValid()) {
                return;
            }
            alert('Hello, ' + $scope.name);
            $scope.name = '';
        };
    }
    
    function GoodController () {
    }
    
    angular.extend(GoodController.prototype, {
        notValid: function () {
            var bad = !!this.name;
            return !bad || this.name.length < 1;
        },
        greetMe: function () {
            if (this.notValid()) {
                return;
            }
            alert('Hello, ' + this.name);
            this.name = '';
        }
    });
    
    app.controller('badCtrl', BadController);
    app.controller('goodCtrl', GoodController);
})();