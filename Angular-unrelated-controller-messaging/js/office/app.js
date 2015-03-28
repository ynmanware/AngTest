(function(app) {

  function sdDataFlowPropertiesPageCtrl() {

    this.modelElement = {
      "type": "dataFlow",
      "id": "MappedPrimitive",
      "name": "MappedPrimitive",
      "oid": 78,
      "dataMappings": [{
        "id": "MappedPrimitive1",
        "name": "MappedPrimitive1",
        "Direction": "IN",
        "DataPath": "Blah",
        "uuid":"1"
      }, {
        "id": "MappedPrimitive2",
        "name": "MappedPrimitive2",
        "Direction": "OUT",
        "DataPath": "Blub",
        "uuid":"2"
      }],
      "dataFullId": "MultipleDataMappingsModel:MappedPrimitive",
      "activityId": "Activity_2"
    };

    sdDataFlowPropertiesPageCtrl.prototype.getClassFor = function(modelElement) {
      if (modelElement.direction == "IN") {
        return "inDataPathListItem";
      } else if (modelElement.direction == "OUT") {
        return "outDataPathListItem";
      } else {
        return "inoutDataPathListItem";
      }

    }

    // Listeners

    sdDataFlowPropertiesPageCtrl.prototype.nameModified = function() {
          console.log(this.selectedDataMapping.name);
        /*this.submitChanges(this.assembleChangedObjectFromProperty("name",
                this.name));*/
      }


    sdDataFlowPropertiesPageCtrl.prototype.addMapping = function() {

    }
    sdDataFlowPropertiesPageCtrl.prototype.deleteMapping = function() {

    }
    sdDataFlowPropertiesPageCtrl.prototype.moveup = function() {

    }

    sdDataFlowPropertiesPageCtrl.prototype.moveDown = function() {

    }

    sdDataFlowPropertiesPageCtrl.prototype.setSelected = function(dataMapping) {
      this.selectedDataMapping = dataMapping;
    }

    // update the element
    sdDataFlowPropertiesPageCtrl.prototype.setElement = function() {
      this.setElement_(); // call super class
      this.element = this.propertiesPanel.element;
      this.modelElement = page.propertiesPanel.element.modelElement;
      this.setSelected(page.propertiesPanel.element.modelElement.dataMappings[0]);
    }
  }

  app.controller('sdDataFlowPropertiesPageCtrl', sdDataFlowPropertiesPageCtrl);

})(angular.module('myApp', []));
