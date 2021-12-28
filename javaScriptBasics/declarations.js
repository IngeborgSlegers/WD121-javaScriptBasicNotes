// VARIABLES
// Variables are named containers for storing data

// SYNTAX
let nameOfVariable = "value"
//(1)    (2)      (3)   (4)
/*
1. let is a JavaScript keyword to denote the creation of a variable
2. Name of the variable which we can use to access the value
3. = is used to assign a value. We call this the assignment operator
4. The initial value
*/

let name = "Ingeborg";
let age = 375;

// Variables are like creating cognitive associations

// Variable Declaration
// Declaration is to the left of the assignment operator (=)
// This consists of the let keyword and the variable name
// Behind the scenes, JS initializes variables with undefined.

let friend;

// Variable Initialization
// The initialization is the right side of the assignment operator (=)
// This is where the we set the value for the variable

let jar = "Strawberry Jam"

// Variable Names Rules
// They can't contain spaces - camelCasing, snake_casing, PascalCasing
// Names have to start with a letter, underscore, or dollar sign
// Names can only contain letters, numbers, underscores, or dollar signs 
// Variable names are case sensitive - let Friend vs let friend
// There are certain reserved keywords in JS that we can't use for variable names

let today = "great!";
console.log(today);

let x; // declaration. The value is undefined;
console.log(x);

x = 10; // initialization. The value is now 10;
console.log(x);

x = 33;
console.log(x)

let y = 7;

let z = x + y;
console.log(z);