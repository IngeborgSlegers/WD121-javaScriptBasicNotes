//FOR IN LOOPS

// Just another type of loop
// For IN loops are great for iterating over values in an object. This is because properties in an objects are "enumerable".

// SYNTAX
/*
  for (randomWord/var in object) {
    action()
  }
*/

let student = {
  name: "Jason",
  awesome: true,
  'coding week': "JavaScript",
  week: 3
}
// student["coding week"];

for(key in student) {
  console.log("property/key",key)
  console.log("value", student[key]) //object bracket notation
}

let catArray = ["tabby", "orange one", "maine coon", "rag doll", "russian blue"];

for (cat in catArray) {
  console.log(cat, catArray[cat])
}

/*
let catArray = {
  0: "tabby",
  1: "orange one",
  2: "maine coon",
  3: "rag doll"
  4: "russian blue"
}
*/