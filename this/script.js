// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:


// In an object method, this refers to the object.

const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };


// Alone, this refers to the global object.

let x = this;

// In strict mode, when used alone, this also refers to the global object:

"use strict";
let y = this;


// In a function, this refers to the global object.

function myFunction() {
    return this;
  }

// In a function, in strict mode, this is undefined.

"use strict";
function myFunction() {
  return this;
}

// In an event, this refers to the element that received the event

<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>


// Methods like call(), apply(), and bind() can refer this to any object.

// call()/apply()
const person1 = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person2 = {
    firstName:"John",
    lastName: "Doe",
  }
  
  // Return "John Doe":
  person1.fullName.call(person2);

//   the difference between call and apply is:

// theFunction.apply(valueForThis, arrayOfArgs)

// theFunction.call(valueForThis, arg1, arg2, ...)

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");


// bind()
  const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person3.fullName.bind(member);

// To determine which object this refers to; use the following precedence of order.

// Precedence	Object
// 1	bind()
// 2	apply() and call()
// 3	Object method
// 4	Global scope

// Is this in a function being called using bind()?

// Is this in a function being called using apply()?

// Is this in a function being called using call()?

// Is this in an object function (method)?

// Is this in a function in the global scope.