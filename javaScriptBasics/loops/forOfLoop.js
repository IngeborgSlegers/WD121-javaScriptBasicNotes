// FOR OF LOOPS

// For of loops create a loop iterating over "iterable" objects. Meaning, these loops numberically loop over these items in a given array. The order matters.

// SYNTAX
/*
for (item of array) {
  action()
}
*/

let student = {
  name: "Jason",
  awesome: true,
  coding: "JavaScript",
  week: 3
}

// This doesn't work because object key/properties are not 'iterable'
for(key of student) {
  console.log(key)
}

let catArray = ["tabby", "orange one", "maine coon", "rag doll", "russian blue", "burmese"]

for(cat of catArray) {
  console.log(cat)
}