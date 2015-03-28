function A(){
 this.name = 'A';
    
}
A.prototype.sayHi = function(firstName, lastName){
    console.log(this.name + " says hi to " + lastName + ", " + firstName);
}    

var a = new A();
a.sayHi('Y', 'M');

//now you want to the this.name from sayHi function with modifying a's name.
// here is how you can do that

function B(){
this.name = 'B';
}

var b = new B();
console.log("USING CALL..............")
a.sayHi.call(b, 'Y', 'M');
a.sayHi.call({name:'C'}, 'Y', 'M');

//when you don't want to bother about arguments use apply
console.log("USING APPLY..............")
var args = ['Y','M'];

a.sayHi.apply(b, args);

a.sayHi.apply({name:'C'}, args);
