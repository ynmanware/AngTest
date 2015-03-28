var app = angular.module('plunker', []);

app.directive('sdItemsFilter', function() {
  return {
    restrict: 'E',
    scope: {
      items: '=',
      selectedItems: '=',
      selectedItemsChanged: '&'
    },
    templateUrl: "dataPath.html",
    link: function (scope, element, attrs){
      scope.selectedItemsChangedDir = function(){
        scope.selectedItemsChanged({selectedItems:scope.selectedItems});  
      }
    }
  }
});

app.directive('sdDataPath', function() {
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
          scope.dataChanged("ddf");
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

app.controller('MainCtrl', function($scope) {
  $scope.name = 'TARS';

  $scope.selectedItems = ["allItems"];

  $scope.selectedItemsChanged = function(selectedItems1) {
    $scope.selectedItemsReturnedFromDirective = selectedItems1;
  }

  $scope.items = [{
    "id": "allItems",
    "name": "All Items",
    "order": 0
  }, {
    "id": "CaseItem",
    "name": "Case Item",
    "model": "PredefinedModel"
  }, {
    "id": "Application",
    "name": "Application",
    "model": "Bank"
  }]

  $scope.user = 'World';

  $scope.dataIdSelected = "Model1:personData";
  $scope.dataPathSelected = "lastName";

  $scope.dataItems = [{"fullId":"Model1:PROCESS_ID","name":"Process OID"},{"fullId":"Model1:ROOT_PROCESS_ID","name":"Root Process OID"},{"fullId":"Model1:PROCESS_PRIORITY","name":"Process Priority"},{"fullId":"Model1:CURRENT_LOCALE","name":"Current Locale"},{"fullId":"Model1:CURRENT_DATE","name":"Current Date"},{"fullId":"Model1:CURRENT_MODEL","name":"Current Model"},{"fullId":"Model1:CURRENT_USER","name":"Current User"},{"fullId":"Model1:LAST_ACTIVITY_PERFORMER","name":"Last Activity Performer"},{"fullId":"Model1:STARTING_USER","name":"Starting User"},{"fullId":"Model1:PrimitiveData1","name":"Primitive Data 1"},{"fullId":"Model1:Data1","name":"Data 1"},{"fullId":"Model1:personData","name":"personData"},{"fullId":"Model1:addressData","name":"addressData"}];

  $scope.dataChanged = function(dataId) {
    console.log("DataChanged: " + dataId);
  }

  $scope.dataPathChanged = function(dataPath) {
    console.log("DataPath: " + dataPath);
  }
  
});