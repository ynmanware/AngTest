Angular -  demonstrate the $scope vs. â€œcontroller asâ€� approaches side-by-side.
http://csharperimage.jeremylikness.com/2014/11/the-top-5-mistakes-angularjs-developers.html
===========================

Example 1:
Simple example showing the difference between bad controller and good controller.
Where Bad controller uses scope and and good controller does not.
We should avoid using scope as much as possible in order make the application more suitable for unit testing.

Example 2:
/* This example is also available at plnkr
http://plnkr.co/edit/YOd3KlzTpVviLVuoEBfN?p=preview*/

Using ControllerAs in directive
avoiding the usage of $scope completely.