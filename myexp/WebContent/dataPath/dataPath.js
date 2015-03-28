var dirApp = angular.module('myDir', []);

dirApp.directive('sdDataPath', function() {
  return {
    restrict: 'E',
    scope: {
      sdaDataItems: '=',
      sdaDataSelected: '=',
      sdaDataPathSelected: '=',
      sdaDataChanged: '&',
      sdaDataPathChanged: '&'
    },
    templateUrl: 'dataPath.html',
    controller: ['$scope', '$attrs', dataPathController]
  }

  function dataPathController($scope, $attrs) {

    dataPathController.prototype.initialize = function() {
      this.resetDataPaths();
      this.dataSelected = [$scope.sdaDataPathSelected];
      $scope.$watch('dataPathCtrl.dataPathSelected', function() {
        console.log("called");
      })
    }

    dataPathController.prototype.dataChanged = function(data) {
      this.resetDataPaths();
      $scope.sdaDataChanged({
        dataSelected: data
      });
    }

    dataPathController.prototype.getMatches = function(match) {
      var matches = this.relevantDataPaths, filtered = [], delim = ".";
      for (var j = 0; j < matches.length; j++) {
        temp = matches[j];
        if (temp.indexOf(match) == 0) {
          if (temp.indexOf(delim, match.length) == -1) {
            if (temp.lastIndexOf(delim) > 0) {
              temp = temp.slice(temp.lastIndexOf(delim) + 1);
            }
            filtered.push({
              id: temp,
              name: matches[j]
            });
          }
        }
      }
      this.filteredDataPaths = filtered;
    }

    dataPathController.prototype.resetDataPaths = function(data) {
      // inject m_parsingUtils and get matches for selected data
      var dataPaths = ["New1.lastName", "New1.firstName"], delim = ".";

      for (i = 0; i < dataPaths.length; i++) {
        tempStr = dataPaths[i].replace(/\./g, delim);
        dataPaths[i] = tempStr.slice(tempStr.indexOf(delim) + 1);
      }

      this.relevantDataPaths = dataPaths;
    }

    $scope.dataPathCtrl = this;
    this.initialize();
  }

})
