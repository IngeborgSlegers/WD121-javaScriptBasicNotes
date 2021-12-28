/* 

BRONZE:
Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check how long the 
names are. Console log how many letters are in each name.

SILVER:
Expand on what you have already done and write a conditional to see who 
has the longer name. Using string interpolation console log who's name 
is longer. 

Example Result: My name is longer than Adam's.

GOLD:
In the console log include how many letters difference there are between 
the names.

Example Result: Adam's name is shorter than mine by 4 letters.

There is also one additional case that should be handled that has 
not been mentioned so far. See if you can add that to your conditional!

*/

/*
BRONZE:
Write two variables. One will store your name and another will store a 
friend's name. Find out what property you can use to check how long the 
names are. Console log how many letters are in each name.
*/

// let myName = 'Ingeborg';
// let friend = 'Emory';

// console.log(myName.length);
// console.log(friend.length);

/*
SILVER:
Expand on what you have already done and write a conditional to see who 
has the longer name. Using string interpolation console log who's name 
is longer. 

Example Result: My name is longer than Adam's.
*/

// let myName = 'Ingeborg';
// let friend = 'Alexandria';

// console.log(myName.length);
// console.log(friend.length);

// if(myName.length > friend.length) {
//   console.log(`My name is longer than ${friend}'s.`);
// } else if (friend.length > myName.length) {
//   console.log(`${friend}'s name is longer than mine.`);
// } else {
//   console.log(`Both ${friend}'s name and my name are the same length.`)
// }

/*
GOLD:
In the console log include how many letters difference there are between 
the names.

Example Result: Adam's name is shorter than mine by 4 letters.
*/

let myName = "Ingeborg";
let friend = "Alexandria";

console.log(myName.length);
console.log(friend.length);

if (myName.length > friend.length) {
  let difference = myName.length - friend.length;
  console.log(`My name is longer than ${friend}'s by ${difference} letters.`);
} else if (friend.length > myName.length) {
  let difference = friend.length - myName.length;
  console.log(`${friend}'s name is longer than mine by ${difference} letters.`);
} else {
  console.log(`Both ${friend}'s name and my name are the same length.`);
}

let myName = "Ingeborg";
let friend = "Alexandria";

console.log(myName.length);
console.log(friend.length);

let difference = myName.length - friend.length;

if (myName.length > friend.length) {
  console.log(`My name is longer than ${friend}'s by ${difference} letters.`);
} else if (friend.length > myName.length) {
  console.log(
    `${friend}'s name is longer than mine by ${Math.abs(difference)} letters.`
  );
} else {
  console.log(`Both ${friend}'s name and my name are the same length.`);
}

/*
FIZZBUZZ LOOP CHALLENGE
************
Create a loop that counts to 100.
Pass each iteration through a conditional.
Write a conditional that:
Prints out "Fizz" if the number is divisible by 3
Prints out "Buzz" if the number is divisible by 5
Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
Prints out the number if none of the above are true.
*/

for (let i = 0; i <= 100; i++) {
  if (i % 15 === 0) {
    //(i % 5 === 0 && i % 3 === 0)
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

let infinity = 15 / 0;
console.log(typeof infinity); //prints number

// Challenge 3
// Create a function that accepts the parameters (base, height).
// Inside of the function use the parameters to calculate the area of a rectangle (A = base*height)
// Console.log the result.

function findArea(base, height) {
  console.log(base, height)
  let area = base * height;
  console.log(area);
}

findArea(5, 4);
findArea(4, 4);
findArea(10);

let area = (base, height) => {
  console.log(base * height);
};
area(5, 4);

function findArea(base, height) {
  let area;
  area = base * height;
  console.log(area);
}

findArea(5, 4);


let conciseArea = (base, height) => console.log(base*height)
conciseArea(4, 5)

// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

// Examples
// animals(2, 3, 5) ➞ 36

// animals(1, 2, 3) ➞ 22

// animals(5, 2, 8) ➞ 50

// Notes
// Don't forget to return the result.
// The order of animals passed is animals(chickens, cows, pigs).
// Remember that the farmer wants to know the total number of legs and not the total number of animals.

function countLegs(chickens, cows, pigs) {
  let chickenLegs = chickens * 2;
  let cowLegs = cows * 4;
  let pigLegs = pigs * 4;
  // return chickenLegs + cowLegs + pigLegs
  let totalLegs = chickenLegs + cowLegs + pigLegs;
  return totalLegs
  // console.log(totalLegs)
}

// countLegs(2, 3, 5)
// countLegs(1, 2, 3)
// countLegs(5, 2, 8)
let totalLegs = countLegs(2, 3, 5)
console.log(totalLegs)