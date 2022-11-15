// https://www.geeksforgeeks.org/pass-by-value-and-pass-by-reference-in-javascript/


function Passbyvalue(a, b) {
    let tmp;
    tmp = b;
    b = a;
    a = tmp;
    console.log(`Inside Pass by value 
        function -> a = ${a} b = ${b}`);
}
  
let a = 1;
let b = 2;
console.log(`Before calling Pass by value 
        Function -> a = ${a} b = ${b}`);
  
Passbyvalue(a, b);
  
console.log(`After calling Pass by value 
       Function -> a =${a} b = ${b}`);


    //    Before calling Pass by value Function -> a = 1 b = 2
    //    Inside Pass by value function -> a = 2 b = 1
    //    After calling Pass by value Function -> a =1 b = 2

    // In Pass by value, function is called by directly passing the value of the variable 
    // as an argument. So any changes made inside the function does not affect the original value.

    // In Pass by value, parameters passed as an arguments create its own copy. So 
    // any changes made inside the function is made to the copied value not to the original value .




function PassbyReference(obj) {
    let tmp = obj.a;
    obj.a = obj.b;
    obj.b = tmp;
  
    console.log(`Inside Pass By Reference 
        Function -> a = ${obj.a} b = ${obj.b}`);
}
  
let obj = {
    a: 10,
    b: 20
  
}
console.log(`Before calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);
  
PassbyReference(obj)
  
console.log(`After calling Pass By Reference 
    Function -> a = ${obj.a} b = ${obj.b}`);


//     Before calling Pass By Reference Function -> a = 10 b = 20
//     Inside Pass By Reference Function -> a = 20 b = 10
//     After calling Pass By Reference Function -> a = 20 b = 10

// In Pass by Reference, we are mutating the original value. 
// when we pass an object as an arguments and update that object’s 
// reference in the function’s context, that won’t affect the object value. 
// But if we mutate the object internally, It will affect the object .