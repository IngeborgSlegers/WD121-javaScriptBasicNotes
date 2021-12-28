// SWITCH STATEMENTS
// Switch statements execute a block of code depending on different cases

/*
switch (evaluation) {
  case "condition":
    something happens here;
    break;
  case "condition 2":
    something else happens here;
    break;
  default:
    do this thing if all else fails
}
*/

/*
    Write a dessert menu;
    If the dessert is pie, console.log 'Pie, pie, me oh my!'
    If the dessert is cake, console.log 'Cake is great!'
    If the dessert is ice cream, console.log 'I scream for ice cream!'
    Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let dessert = "carrots";

switch (dessert) {
  case "pie":
    console.log("Pie, pie, me oh my!");
    break;
  case "cake":
    console.log("Cake is great!");
    break;
  case "ice cream":
    console.log("I scream for ice cream!");
    break;
  default:
    console.log("Not on the menu");
}

// if (age >= 25) {
//   console.log("You can rent a car!")
// } else if (age >= 21) {
//   console.log("You can drink!")
// } else if (age >= 18) {
//   console.log("You can vote!")
// } else {
//   console.log("Sorry, you are too young to do anything")
// }

let age = 26;
switch (true) {
    case (age >= 25) :
      console.log("You can rent a car!")
      break;
    case (age >= 21):
      console.log("You can drink!")
      break;
    case (age >= 18):
      console.log("You can vote!")
      break;
    default:
      console.log("Sorry, you are too young to do anything")
}
  

//only works for 3 specific ages
// switch (age) {
//   case 25:
//     console.log("You can rent a car!")
//     break;
//   case 21:
//     console.log("You can drink")
//     break;
//   case 18:
//     console.log("You can vote!")
//     break;
//   default:
//     console.log("Sorry, you are too young to do anything")
// }