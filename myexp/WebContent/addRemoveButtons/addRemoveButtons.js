var dirApp = angular.module('myDir', []);

dirApp.directive('sdAddRemoveButtons', function() {
  return {
    restrict: 'E',
    scope: {
      addItem: '&',
      deleteItem: '&',
      sortAsc: '&',
      sortDesc: '&'
    },
    templateUrl: 'addRemove.html',
    link: function(scope, element, attrs) {
      scope.showSort = false; 
      if(typeof scope.sortAsc == 'function'){
        scope.showSort = true; 
      }
      scope.addLabel = "ADD DIR";
    } 
  }
})