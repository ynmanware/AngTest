    angular.module('demo').controller('TopController', ['$scope', 'DemoService', '$rootScope', TopController]);
    angular.module('demo').controller('MiddleController', ['$scope', 'DemoService', '$rootScope', MiddleController]);
    angular.module('demo').controller('BottomController', ['$scope', 'DemoService', BottomController]);

    function TopController($scope, DemoService, $rootScope) {
        $scope.topValue = 0;
        $scope.middleValue = 0;
        $scope.bottomValue = 0;

        var self = this;
        self.rootScope = $rootScope;

        $scope.$watch('topValue', function() {
            DemoService.updateTopValue($scope.topValue);
            self.rootScope.topValueR = $scope.topValue;
        });

        $scope.$watch(function() {
            return DemoService.data;
        }, function(newValue, oldValue) {
            updateScopeValues($scope, newValue, oldValue);
        }, true);
    }

    function MiddleController($scope, DemoService, $rootScope) {
        $scope.topValue = 0;
        $scope.middleValue = 0;
        $scope.bottomValue = 0;

        $scope.$watch('middleValue', function() {
            DemoService.updateMiddleValue($scope.middleValue);
        });

        self.rootScope = $rootScope;
        $scope.$watch('topValueR', function() {
            $scope.topValue = self.rootScope.topValueR;
        });
    }

    function BottomController($scope, DemoService) {
        $scope.topValue = 0;
        $scope.middleValue = 0;
        $scope.bottomValue = 0;

        $scope.$watch('bottomValue', function() {
            DemoService.updateBottomValue($scope.bottomValue);
        });

        $scope.$on('valuesUpdated', function() {
            $scope.topValue = DemoService.topValue;
            $scope.middleValue = DemoService.middleValue;
        });
    }

    function updateScopeValues($scope, newValue, oldValue) {
        $scope.topValue = newValue.topValue;
        $scope.middleValue = newValue.middleValue;
        $scope.bottomValue = newValue.bottomValue;
    }