// ARRAYS
/*
1. Arrays use square brackets
2. They are containers that hold multiple items
3. They can contain multiple data types
4. Arrays start with an index of 0

*/

let list = ["cranberries", "piedough", "pumpkin puree"];
console.log(list[2])

let movieList = [
  "The Lion King", 
  "Cinderella", 
  ["Back to the future I", "Back to the future II", "Back to the future III"], 
  "The Santa Clause"
];

// console.log(movieList[1[1]]) => undefined
console.log(movieList[2]) //=> prints the list of BTTF movies
let backToTheFuture = movieList[2] //=> assigned the movies to its own variable
console.log(backToTheFuture); //=> prints out those movies
console.log(backToTheFuture[1]); //=> prints "Back to the future II"
console.log(movieList[2][1]); //=> We've put everything together

// The .length property returns the numbers of items in the specified array.
console.log(movieList.length);

// Shift method. It removes the first element of an array
movieList.shift();
// Unshift method. It adds a new first element to an array
movieList.unshift("Jurassic Park");

// Pop method. It removes the last element of an array
movieList.pop();
// Push method. It adds a new element at the END of an array.
movieList.push("Star Wars: The Empire Strikes Back");

// Reverse method. It reverses the array.
// movieList.reverse();

// Splice method. It changes the contents of an array by removing or replacing existing elements and/or adding new elements in its place.
// This method takes in 3 items: First is the starting point. Second, how many items (if any) do we want to remove. Third is the item(s) we want to to replace it with.
// \' is an escape character used when a string is wrapped with single quots and there is an apostrophe in the string ('');
movieList.splice(2, 1, "Bambi", 'Jason\'s Lyric');
movieList.splice(3, 1, "The Mummy")

console.log(movieList);