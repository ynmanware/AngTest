var app = angular.module('plunker', ['myDir', 'bpm-common.directives']);

app.controller('MainCtrl', function($scope) {
  $scope.user = 'World';

  $scope.dataItems = [{
    "fullId": "Model1:PROCESS_ID",
    "name": "Process OID"
  }, {
    "fullId": "Model1:ROOT_PROCESS_ID",
    "name": "Root Process OID"
  }, {
    "fullId": "Model1:PROCESS_PRIORITY",
    "name": "Process Priority"
  }, {
    "fullId": "Model1:CURRENT_LOCALE",
    "name": "Current Locale"
  }, {
    "fullId": "Model1:CURRENT_DATE",
    "name": "Current Date"
  }, {
    "fullId": "Model1:CURRENT_MODEL",
    "name": "Current Model"
  }, {
    "fullId": "Model1:CURRENT_USER",
    "name": "Current User"
  }, {
    "fullId": "Model1:LAST_ACTIVITY_PERFORMER",
    "name": "Last Activity Performer"
  }, {
    "fullId": "Model1:STARTING_USER",
    "name": "Starting User"
  }, {
    "fullId": "Model1:PrimitiveData1",
    "name": "Primitive Data 1"
  }, {
    "fullId": "Model1:Data1",
    "name": "Data 1"
  }, {
    "fullId": "Model1:personData",
    "name": "personData"
  }, {
    "fullId": "Model1:addressData",
    "name": "addressData"
  }];

  $scope.dataIdSelected = "Model1:personData";
  $scope.dataPathSelected = "lastName";

  $scope.dataChanged = function(dataIdSelected) {
    console.log("DataChanged: " + dataIdSelected);
  }

  $scope.dataPathChanged = function(dataPath) {
    console.log("DataPath: " + dataPath);
  }
});