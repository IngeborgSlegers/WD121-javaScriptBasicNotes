// LOOPS

/*
1. Loops offer us a quick and easy way to do something repeatedly
2. There are many different kinds of loops, but all they all roughly do the same thing.
3. Loops will repeat until a specific condition evaluates to false.
4. There is the danger of infinite loops. ctrl + c to stop
*/

// SYNTAX FOR FOR-LOOP

/*
for = keyword
() = conditions
{} = action that gets repeated for each item/iteration

for (initial expression - starting; condition - stopping; increment) {
  Do a thing
}
*/

//example
for(let varName = 0; varName <= 10; varName++) {
  console.log(varName)
}

//Challenge: using a for loop, starting from 0, count to 20, by 2's
for (let i = 0; i <= 20; i = i+2){ //(let i = 0; i <= 20; i+=2)
  console.log(i)
}

//Challenge: using a for loop, count from 10 to 0, going down by 1
for (let count = 10; count >= 0; count-=1) { //i--
  console.log(count)
}

// Challenge: using a for loop, go through a name and display each letter individually
let name = "Kenn";
for(let i = 0; i < name.length; i++) {
  console.log(i, name[i], name.charAt(i))
}

// Challenge: write a for loop that capitalizes the first letter of a name, and lowercases the rest of the name. At the end, console log the corrented name;

/*
- 2 variables: 1 to store the broken name and 1 initialized to store the correct name;
- for loop to iterate over letter in the broken name;
- conditional statement to check for first letter
*/

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
let brokenName = "AdAM";
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalizeFirstLetter(brokenName))