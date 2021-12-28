// FUNCTIONS
// Functions are a chunk of code that performs a set action when called..

//SYNTAX
function nameOfMyFunction() {
  // some kind of action
}

//write a function that console.logs hi.
function sayHi() {
  console.log("hi")
}

//CALLING OR INVOKING THE FUNCTION
//Calling a function is what triggers the chunk of code to run. Like an on switch or a button being clicked.

//SYNTAX
// nameOfMyFunction()      Name of the function followed by a set of parentheses
carStart()

function frankenStein() {
  console.log("it's alive!!!")
}

frankenStein()

function carStart() {
  console.log("go vroom vroom")
}


// EXPRESSIONS VS DECLARATIONS
// Function expressions are functions stored within variables
// Expressions do not get hoisted. Declarations do.

// Declaration
// function hi() {
//   console.log('hi')
// }

// Expression
let hey = function hi() {
  console.log("hi")
}

hey()
console.log(hey);
// hi()

let anonymous = function() {
  console.log("I'm a secret")
}

anonymous()
console.log(anonymous)


// PARAMETERS (AKA the parentheses)
// Function parameters are place holders for data that we give to a function.

// SYNTAX
/*
  function nameOfMyFunction(param1, param2, param3, ...) {
    action using param1 and param2, param3
  }

  nameOfMyFunction("data1", "data2", "data3")
*/

function greeting(studentName) {
  console.log(`Good morning ${studentName}`)
}

greeting("Delisa");
greeting("Nolan");
greeting("Jared A");
greeting("Jared G");

let name = "Ingeborg"

function makeCoffee(coffeeGrounds, water) {
  console.log(`I'm brewing coffee with ${coffeeGrounds} tbsp of coffee and ${water} ounces of water.`);
  console.log('I\'m brewing coffee with', coffeeGrounds, 'tbsp of coffee and', water, 'ounces of water');
  console.log(name)
}

makeCoffee(3, 7) //data passed into the function = argument
// console.log(coffeeGrounds, water)

// STRING INTERPOLATION allows us to inject/use variables inside on a string. The key pieces to string interpolation are backticks (above the tab), dollar sign ($), and curly braces with the name of the variable inside of the curly braces.


// FAT ARROW FUNCTION
// No longer have that function keyword. 
// They are an expression (not a declaration)
// Easily identified by => (vs >=)

// SYNTAX
/*
  let variableName/functionName = () => {
    something happens here
  }

  functionName()
*/

/*
let goodAfternoon = function(firstName, lastName) {
  console.log(`Good Afternoon ${firstName} ${lastName}!`)
}
*/

let goodAfternoon = (firstName, lastName) => {
  console.log(`Good Afternoon ${firstName} ${lastName}!`)
} 

goodAfternoon("Emory", "Brunner");
goodAfternoon("Jason", "Line");

// BODY
/*
 Concise body in arrow functions have an implicit single line return
 Block body must have a return in the body of the function
*/

/*
Example of concise body
let goodAfternoon = (firstName, lastName) => console.log(`Good Afternoon ${firstName} ${lastName}!`)
*/



// RETURN STATEMENTS
// Functions use the return keyword to make data accessible outside of its body ({}) so that another function later down the line can use that data.


function sayHello(name) {
  let text = `Hi ${name}`;
  return text;
}

sayHello("Ingeborg"); //doesn't print anything
console.log(sayHello("Ingeborg")); //prints "Hi Ingeborg"

let hello = sayHello("Ingeborg"); // assigning the value that was returned from the function to a variable. The variable captures the return statement from the function.
console.log(hello); //prints "Hi Ingeborg"


//EXAMPLE
// let brokenName = "AdAM";
// let fixedName = "";

// for(let i = 0; i < brokenName.length; i++){
//   if(i === 0) {
//     fixedName = fixedName + brokenName[i].toUpperCase();
//   } else {
//     fixedName = fixedName + brokenName[i].toLowerCase();
//   }
//   console.log(fixedName)
// }

function fixName(name) {
  let fixedName = "";
  for(let i = 0; i < name.length; i++) {
    if(i === 0) {
      fixedName = fixedName + name[i].toUpperCase();
    } else {
      fixedName = fixedName + name[i].toLowerCase();
    }
  }
  return fixedName;
}

// let newName = fixName("inGeBorG")
// console.log(newName);

let brokenNames = ["inGeBorG", "jASoN", "EMORY"];
let cleanNames = [];

for(brokeName of brokenNames){ //loops over each name in the brokenNames array
  console.log(brokeName);
  let alteredName = fixName(brokeName); // storing the fixedName from the function in a variable
  console.log(alteredName)
  cleanNames.push(alteredName) // adding fixedName to cleanNames array
}

console.log(cleanNames);