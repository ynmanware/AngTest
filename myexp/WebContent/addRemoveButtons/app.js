var app = angular.module('plunker', ['myDir']);

app.controller('MainCtrl', function($scope) {
  $scope.user = 'World';

  $scope.addItem = function() {
    console.log("ADDED");
  }

  $scope.deleteItem = function() {
    console.log("Deleted");
  }

  $scope.sortAsc = function() {
    console.log("Ascending");
  }

  $scope.sortDesc = function() {
    console.log("Descending");
  }

  
});