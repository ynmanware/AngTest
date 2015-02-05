Angular - communication between unrelated controllers
===========================

Demonstrating on sharing data between controllers which are unrelated to each other. 

<h5>Setup: </h5>
<ul>
<li> index.html - contains all html code being used and you can just open this file to run the example </li>
<li>demoControllers.js</li>
<li>demoService </li>
<li>demo.css - optional</li>
</ul>
Here, I am covering three options to share data between unrelated controllers.

<h5> 1. Sharing data through Service and $watch </h5>
MiddleController - watches 'middleValue', on change - invokes DemoService.updateMiddleValue()
DemoService - updates this.data.middleValue
TopController - watches DemoService.data for a change

<h5>2. Sharing data through Service and broadcast-on</h5>
TopController - watches 'topValue', on change - invokes DemoService.updateTopValue()
DemoService - broadcast 'valuesUpdated'
BottomController - listens to 'valuesUpdated' event

<h5>3. Sharing data through rootscope and $watch</h5>
TopController - watches 'topValue', on change - invokes updates $rootScope.topValueR
MiddleController - watches $rootScope.topValueR for any changes

<h5>4. Sharing data through JUST service and using object property</h5>
<B>Setup</B>
index_refined.html - open it to run the example
refined/app.js - contain all js code for this option
Here service.description is being between two controllers.  In Controller1, the property is editable.
Controller2 just reads it.
exp2 is one more example or similar kind.


<B>Note: </B>There are different opproaches for comminication between parent controller and directives.


http://plnkr.co/edit/den1mfMeIAWezLTuVZVX?p=preview

<h5>5. exp3 is a simple example of using a service for data sharing along with scope.
