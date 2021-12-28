// DATA TYPES
// STRINGS

//Strings are used to represent text and are wrapped with quotes
//We can either use single OR double quotes. However, the opening quote must match the closing quote.

let firstName = "Ingeborg"; 
let lastName = 'Slegers';
console.log(firstName, lastName);
let fullName = firstName + " " + lastName;
console.log(fullName);

let loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu scelerisque felis imperdiet proin. Egestas tellus rutrum tellus pellentesque eu tincidunt. Nunc vel risus commodo viverra maecenas. Interdum velit euismod in pellentesque. Auctor augue mauris augue neque gravida in fermentum et sollicitudin. In dictum non consectetur a erat nam at lectus urna. Feugiat nisl pretium fusce id velit. Tristique senectus et netus et malesuada fames ac turpis. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus. At tellus at urna condimentum mattis pellentesque id nibh tortor. Bibendum enim facilisis gravida neque convallis. Viverra nibh cras pulvinar mattis nunc. Magna ac placerat vestibulum lectus mauris. Mi eget mauris pharetra et ultrices. Et tortor consequat id porta nibh. Eget nulla facilisi etiam dignissim diam. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Venenatis urna cursus eget nunc scelerisque. Pellentesque dignissim enim sit amet. Porttitor massa id neque aliquam vestibulum morbi blandit. Maecenas pharetra convallis posuere morbi leo. Metus aliquam eleifend mi in nulla posuere sollicitudin. Semper quis lectus nulla at volutpat. Viverra ipsum nunc aliquet bibendum enim. Mi ipsum faucibus vitae aliquet. Mattis molestie a iaculis at erat pellentesque adipiscing. Nunc congue nisi vitae suscipit tellus mauris. Parturient montes nascetur ridiculus mus mauris vitae. Porttitor massa id neque aliquam vestibulum morbi. Viverra ipsum nunc aliquet bibendum. Est sit amet facilisis magna etiam. Ac tincidunt vitae semper quis lectus nulla. Lorem mollis aliquam ut porttitor leo. Non consectetur a erat nam. Dignissim convallis aenean et tortor at risus. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Sit amet est placerat in egestas erat imperdiet."

console.log(loremIpsum)

//NUMBERS
// Numbers in JS are the same as in English. No need for special characters.

let temp = 38;
console.log(temp);

let precise = 999999999999999;
console.log(precise);

let notQuite = 9999999999999999;
console.log(notQuite);

let someMath = 0.2 + 0.1;
console.log(someMath);

let numbersAreHard = (0.2 * 10 + 0.1 *10) /10
console.log(numbersAreHard);

let first = 1050 + 100;
console.log(first);
let second = "1050" + "100";
console.log(second);
let third = 1050 + "100";
console.log(third);

// Adding two numbers together = number (addition)
// Adding two string together = string (concatenation)
// Adding a string and a number = string (coersion - concatenation)

//BOOLEAN
// Boolean has only two possible values: True or false;

let on = true; //true does not equal "true" - booleans are different from strings
let off = false; //false does not equal "false"
console.log(on, off)

//OBJECTS
// Objects are used to store many values instead of a singular value
// Objects have curly brace and key-value pairs which are separated by commas.

let frodo = {
  race: "hobbit",
  rings: 1,
  cloak: true,
  name: "Frodo Baggins"
}

let sam = {
  race: "hobbit",
  rings: 0,
  cloak: true,
  name: "Samwise Gamgee"
}

console.log(frodo, sam)

// ARRAYS
// Arrays are a type of object which can hold lists of items.
// Arrays are identifiable thanks to square brackets and items are separated by commas.

let todoList = ["feed the animals", "do laundry", "run errands", "make food"]
console.log(todoList)
console.log(typeof todoList)
console.log(todoList[0]) //Squarebracket notation. Arrays have a zero index.

// UNDEFINED
// Undefined means there is no value assigned.

let correct;
console.log(correct);

// NULL
// Null as a value is empty container. Nothing exists in it, but the container is still there.

let empty = null;
console.log(empty);