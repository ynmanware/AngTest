(function(){
  'use strict';

  var dirApp = angular.module('myDir', []);

  dirApp.directive('sdDataPath1', function() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        dataPathSelected: '@',
        dataSelected: '@',
        dataChanged: '&',
        dataPathChanged: '&'
      },
      templateUrl: 'dataPath.html',
      link: function(scope, element, attrs) {
        scope.dataChangedLocal = function(data){
          console.log(data);
        }
      }/*,
      controller: ['$scope', dataPathController]*/
    }

    /*function dataPathController($scope) {

      dataPathController.prototype.initialize = function() {

      }

      $scope.dataPathCtrl = self;
    }*/

  })
})();
  
