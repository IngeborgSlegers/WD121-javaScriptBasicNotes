// TERNARY
// Ternaries are shortened versions of writing an if/else or else/if statement.
// Ternaries are easily identifiable thanks to ? and :

// SYNTAX
// (evaluation) ? do a thing : do something else

let num = 6;

if (num > 5) {
  console.log("Yes")
} else {
  console.log("No")
}

(num > 5) ? console.log("Yes") : console.log("No")

let greeting = "hello";
if (greeting == "hi") {
  console.log("Hi!")
} else if (greeting == "hello") {
  console.log("Hello")
} else {
  console.log("goodbye")
}

(greeting == "hi") ? console.log("Hi!") 
  : greeting == "hello" ? console.log("Hello") 
  : console.log("Goodbye")

// Convert the age challenge as a ternary
// Don't forget to take a break. Even if it's to go get a glass of water

// if (age >= 25) {
//   console.log("You can rent a car!")
// } else if (age >= 21) {
//   console.log("You can drink!")
// } else if (age >= 18) {
//   console.log("You can vote!")
// } else {
//   console.log("Sorry, you are too young to do anything")
// }

let age = 22;

(age >= 25) ? console.log("You can rent a car") 
  : (age >= 21) ? console.log("You can drink") 
  : (age >= 18) ? console.log("You can vote") 
  : console.log("Sucks to be you");
  
  (age >= 25) ? console.log("You can rent a car") : (age >= 21) ? console.log("You can drink") : (age >= 18) ? console.log("You can vote") : console.log("Sad day");