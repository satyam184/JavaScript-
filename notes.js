//Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope

// for (var i = 0; i < 11; i++) {
//     console.log(i);
// }

// var i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }


// function sum(n,n1){
//     console.log(n+n1);

// }
// var n=1;
// var n1=2;
// sum(n,n1);

// var arr=[1,2,3,4];
// arr.push(5);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// arr.splice(2,2);

// console.log(arr);


// diff b/w var let const

// var 
// es5 (old version)
// function scope
// it add to the window Object

// let const
// es6 
// braces scope
// it doesn't add to the window object


// There are some features that we can use in JavaScript, that is not included in JavaScript but it can be still used and those features are called as ‘window’. And those features are provided by the browser. 
// - var adds itself to window object. [It’s window and not windows]
// - let and const don’t add themselves to window object. 

// If you open console, and type window on it and hit enter. You can see the declared var variables inside it, which was the security concern. While on the other hand const and let don’t show their variable values inside the window object, which also one of the few reasons why it’s used more than var declaration.

//  When browser provide 3 features and they are called as browser context API. 
// The 3 features are:
// - Windows
// - Stack
// - Heap Memory

//  Whenever function runs, it creates and execution context. Execution context is basically an imaginary box which contain variable, function under the parent function and lexical environment of that function.  

//  Lexical environment basically act as scope. It tells which function can access which functions variable, like a scope chain. A child can access his parents variable, but a parent can’t access that child's variable, because that parent function is not declared inside the child function. 

// function abc(){
//     var a=1;
//     function def(){
//         var b=2;
//     }
// }

// To copy the reference values we use Spread syntax (...) to do it.
// var arr=[1,2,3,4];
// var b=[...arr];
// b.pop();
// console.log(b);
// console.log(arr);


// var a={name:"satyam"};
// var b={...a};
// b.name="sat";
// console.log(b);
// console.log(a);

// Falsy: 0 undefined null Nan document.all
// Truthy: Besides all of the Falsy values, everything is Truthy. 
// if(1){
//     console.log("Hey");
// }
// else{
//     console.log("Hello")
// }


// forEach act as a loop, which iterate over each value in an array. And because it iterate over each value in array, you can perform all of the operation related to array & iteration, like adding the original value with another value etc.
// One thing to remember is forEach make changes in the array values, but the original array values never get changed. It creates its own temporary copy to perform the operations. 
// Use in array

// a=[1,2,3,4,5];
// a.forEach(function(val) {
//     console.log(val+2);
// });


// forin act as a loop, which iterate over each value in an object. 
// var car={
//     owner:"Satyam",
//     price:"20L",
//     tax:"20k"
// }

// for(var key in car){
//     // console.log(key);
//     // console.log(car[key]);
//     console.log(key, "==>", car[key]);
// }


// var a=12;
// do {
//     console.log("hey");
//     a++;
// }
// while(a<=15)


// Callback function: It basically sets an time limit, and after that time limit a particular task or function gets executed only if the task inside that function is completed otherwise it will keep waiting until the task inside that function is completed, and after it’s completed it will basically print it out on the screen.

// setTimeout(function(){
//     console.log("hey");
// },5000);


// First class functions: You can store functions inside an variable.
// function abc(a) {
//     a();

// }

// abc(function(){
//     console.log("Hey");
// })

// Arrays in JavaScript are technically Objects. Where objects key acts as arrays index and it’s value as arrays value. And because of this property, you can create an negative index in array and assign it a value. 

// To delete an obj, write delete.keyName;

// var obj={
//     name:"Satyam",
//     Age:"22"
// }

// delete obj.Age;
// console.log(obj[key]);
