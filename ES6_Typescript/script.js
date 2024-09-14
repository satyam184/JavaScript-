// console.log("Hello");

// var a=1;
// var b=2;
// console.log(a+b);

// --> for loop

// for(let i=0; i<=10; i++){
//     console.log(i); 
// }


// for (let i = 0; i < 10; i++) {
//     setTimeout(
//         function () { 
//         console.log(i);
//     }, 1000);
// }

//-->const declartion
// let num1;
// const num2=10;

// const obj1={
//     name:"Joatmon"
// };
// console.log(obj1.name)

// obj1.name="Chandler";
// console.log(obj1.name);


//--> Arrow function
// var getRegvalue = function(){
//     return 10;
// }
// console.log(getRegvalue);


// const getArrowvalue = (m,b)  => 10*m+b; //if their is a single value we cam ignore parthesis
// console.log(getArrowvalue(5,10));

// console.log(typeof getArrowvalue);


//-->this
// var employee = {
//     id: 1,
//     greet:function(){
//         console.log(this.id)
//     }
// };

// employee.greet();


// var employee = {
//     id: 1,
//     greet:function(){
//         var self=this; //we have to declare a new variable for accessing the id
//         setTimeout(function(){
//             console.log(self.id);
//         }, 1000)
//     }
// };

// employee.greet();



// var employee = {
//     id: 1,
//     greet:function(){
//         setTimeout(()=>{console.log(this.id)}, 1000) //arrow function helps to access the id
//     }
// };

// employee.greet();



//-->Default functions parameters
// let percent = () => 0.1;
// let getvalue = function (value = percent, bonus = value) {   //value = bonus we can use it
//     console.log(value, bonus);
// }
// getvalue();



//--> Rest parameters
// let displaycolour=function(message, ...colors){
//     console.log(message);
//     console.log(colors);
//     console.log(arguments.length);

//     for(let i in colors){
//         console.log(colors[i]);
//     }
// }

// let message="List of colors";

// displaycolour(message, 'Red');
// displaycolour(message, 'Red','Blue');
// displaycolour(message, 'Red','Blue','Green');


//--> spread operator
// let displaycolour=function(message, ...colors){
//     console.log(message);

//     for(let i in colors){
//         console.log(colors[i]);
//     }
// }

// let message="List of colors";
// let colourArray=['orange', 'blue', 'green'];
// displaycolour(message, ...colourArray);


//--> object literals
// let firstname="Chandler";
// let lastname="Bings";

// let person = {
//     //firstname: firstname,  //if both side is same name we can right only one name
//     //lastname: lastname

//     firstname,
//     lastname
// };

// console.log(firstname, lastname);


// function createPerson(firstname, lastname, age){
//     let fullname = firstname + " " + lastname;
//     return{
//         firstname,
//         lastname,
//         fullname,

//         //letisSenior:function(){
//         letisSenior(){     // we can also write this
//             return age>60;
//         }

//     }
// }
// let p=createPerson("Rose", "geller", 62);
// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.lastname);

// let ln = "last name";
// let person  = {
//     "first name":"Chandler",
//     [ln]:"Bing"
// };
// console.log(person["first name"]);



//--> destructuring array

// let employee = ["chandler", "bing", "male"];
// let [fname, ...elemnts] = employee;

// console.log(fname);
// console.log(elemnts);
//console.log(gender);



// let employee = ["chandler", "bing", "female"];
// let [fname, lastname, gender="male"] = employee; //default value

// console.log(fname);
// console.log(lastname);
// console.log(gender);

//-->creating alis
// let employee = {
//     fname: "chandler",
//     lname: "bing",
//     gender: "male"
// };

// let { fname:f, lname:l, gender:g } = employee; //destructing and alis

// console.log(f);
// console.log(l);
// console.log(g)


//--> String templates
// let user = "chandler";
// let greet = "welcome " + user + " to es2015";

// console.log(greet);



// let user = "Chandler";

// let greet = `welcome 'single' "double" ${user} to ES2015
//              this is the second line.
//                 third and so      on.
// `;
// // when we use backtack ` spaces are significant
// console.log(greet);


//-->For loop
// let colors=['Red', 'Green', 'Blue'];

// for(let index in colors){
//     console.log(colors[index]);
// }

// for(let color of colors){
//     console.log(color);
// }

// let Letters="ABC";
// for(let letter of Letters){
//     console.log(letter);
// }

//--> class
// class person{
//     greet(){}
// }
// let p= new person;

// console.log(p.greet  === person.prototype.greet);


// class person{
//     constructor(name){
//         this.name=name;
//         console.log(this.name + " constructor");
        
//     }
//     static staticMethod(){
//         console.log("Static Method");
//     }
//     greetPerson(){
//         console.log("Hello "+this.name);
//     }
// }
// let p=new person;
// person.staticMethod();
// p.greetPerson();


//--> inheritance
// class person{
//     constructor(name){
//         console.log(name + " Person constructor");
//     }
// }

// class employee extends person{

// }

// let p = new employee("Chandler");


//--> super key 
// class person{
//     constructor(name){
//         console.log(name + " Person constructor");
//     }
//     getID(){
//         return 10;
//     }
// }

// class employee extends person{
//     constructor(name){
//         super(name);
//         console.log(name + " employee constructor");
//     }
//     getID(){
//         // return 15;
//         return super.getID();
//     }
// }

// let e = new employee("Chandler");
// console.log(e.getID());
