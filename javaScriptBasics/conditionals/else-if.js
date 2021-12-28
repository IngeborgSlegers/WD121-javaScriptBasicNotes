// ELSE IF
// Else if statements build out even more options to the flow of our programming. We can provide more options and build more specificity.

// SYNTAX
/*
if (condition) {
  do a thing
} else if (second condition) {
  do a different thing
} else if (third condition) {
  do another thing
} else {
  if all else fails, do this thing
}
*/

/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/


// if (age) {
//   console.log(age)
// } else {
// THIS DOESN"T WORK. IT STOPS AT 18
//   if (age <= 17) {
//     console.log("Age entered was " + age)
//     console.log("Sorry, you are too young to do anything")
//   } else if (age >= 18) {
//     console.log("You can vote!")
//   } else if (age >= 21) {
//     console.log("You can drink!")
//   } else if (age >= 25) {
//     console.log("You can rent a car!")
//   }
// // }

// if (age >= 25) {
//   console.log("You can rent a car!")
// } else if (age >= 21) {
//   console.log("You can drink!")
// } else if (age >= 18) {
//   console.log("You can vote!")
// } else {
//   console.log("Sorry, you are too young to do anything")
// }

// if (age < 18) {
//   console.log("Sorry, you are too young")
// } else if (age < 21) {
//   console.log("You can vote!")
// } else if (age < 25) {
//   console.log("You can drink!")
// } else {
//   console.log("You can rent a car!")
// }
let age = 16;

if (age <= 17) {
  console.log(`Sorry, you are too young`);
} else if (age >= 25) {
  console.log("You can rent a car");
} else if (age >= 21) {
  console.log("You can drink");
} else if (age >= 18) {
  console.log("You can vote");
}

// var age = n;
// var oldEnough = age < 18 ? "Too young" : "Old enough";
// alert(oldEnough);
// var voteable = age > 18 ? "Too young" : "You can vote!";
// alert(voteable);
// var drinkAlcohol = age > 21 ? "Too young" : "You can drink!";
// alert(drinkAlcohol);
// var rentACar = age > 25 ? "Too young" : "You can rent a car!";
// alert(rentACar);
