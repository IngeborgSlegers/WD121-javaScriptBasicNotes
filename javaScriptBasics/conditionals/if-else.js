// IF STATEMENTS
// If statements are used in our every day process to make certain decisions and determine actions accordingly.

// SYNTAX
// if (condition) {
//    perform a specific action 
// }

let isOn = false;
if (isOn == true) {
  console.log("The light is on!")
}
// This is checking to see if the value of isOn is true
// The condition defaults to checking for a true value
if (isOn) {
  console.log("The light is still on.")
}

if (isOn == false) {
  console.log("The light is off")
}

let weatherTemp = 65;

if (weatherTemp < 70) {
  console.log("Wear a jacket")
}

// ELSE (IF ELSE) STATEMENTS
// else supports the if statement and is the fall back if the if condition does not evaluate to true

// SYNTAX
/*
if (condition){
  do a thing
} else {
  do something different
}
*/
weatherTemp = 75;
if (weatherTemp < 70) {
  console.log("Wear a jacket")
} else {
  console.log("No jacket necessary")
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

Silver:
    If It is your name, console log 'Hello, my name is <name>'

Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

//BRONZE
let hiMyName = "Jason"
// (userInputName == nameInDatabase). If so console.log(nameInDatatbase)
if (hiMyName == "Ingeborg") {
  console.log(hiMyName);
} else {
  console.log("Hello, what is your name")
}

// SILVER
hiMyName = "Ingeborg"
// (userInputName == nameInDatabase). If so console.log(nameInDatatbase)
if (hiMyName == "Ingeborg") {
  console.log("Hello, my name is " + hiMyName + "!");
} else {
  console.log("Hello, what is your name")
}

// GOLD
hiMyName = "Jason"
// (userInputName == nameInDatabase). If so console.log(nameInDatatbase)
if (hiMyName == "Ingeborg") {
  console.log("Hello, my name is " + hiMyName + "!");
} else {
  console.log(`Hello, is your name ${hiMyName}?`) //STRING INTERPOLATION
}

//STRING INTERPOLATION
//We use string interpolation when we want to inject a variable in a string without having to worry about concatenation (+)
//It uses backticks (``). We wrap the variableName with ${}