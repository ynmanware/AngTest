/* This example is also available at plnkr
http://plnkr.co/edit/YOd3KlzTpVviLVuoEBfN?p=preview*/

(function () {
    var app = angular.module('myApp', []);
    
    function ExampleCtrl () {

        // ViewModel
  var vm = this;
 
  vm.title = 'AngularJS, Gulp, and Browserify!';
  vm.number = 1234;

    }
    
    angular.extend(ExampleCtrl.prototype, {
        greetMe: function () {
            if (this.notValid()) {
                return;
            }
            alert('Hello, ' + this.name);
            this.name = '';
        }
    });

    function breakLimit($window) {
    return {
        controller: ExampleCtrl,
        scope: true,
        controllerAs: 'ctrl',
        link: function(scope, element, attrs, ctrl) {
            var width = $window.innerWidth;
            if ( width <= 640 ) {
                ctrl.limit = 6;
            }
            if ( 641 <= width <= 1024 ) {
                ctrl.limit = 8;
            }
            if ( 1025 <= width <= 1440 ) {
                ctrl.limit = 12;
            }
        }
    }
}

app.directive('breakLimit', breakLimit);

function directive2Ctrl(){
    this.name = 'I am in directive2';
}

function directive2($window){
return {
        scope: true,
        controller: directive2Ctrl,
        controllerAs: 'directiveCtrl2',
        link: function(scope, element, attrs, directiveCtrl2){
            directiveCtrl2.name =$window.innerWidth;
        }
    }
}

app.directive('myDirective2', directive2);

})();