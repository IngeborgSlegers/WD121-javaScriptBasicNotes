// OBJECTS 
// Objects are a datatype that consists of key-value pairs that are used to store LOADS of data.

/*
1. Objects are identifiable thanks to curly braces ({})
2. Objects have key-value pairs
3. key: value 
4. Each key-value pair is separated with a comma
5. Objects can store lots of different data types
*/

let netflixShow = {
  name: "The Good Place",
  likes: 932,
  seasonInfo: {
    season1: {
      numberOfEpisodes: 5,
      episodeInfo: [
        {
          episode: 1,
          episodeName: "Pilot"
        },
        {
          episode: 2,
          episodeName: "Flying"
        }
      ]
    }
  }
}

let person = {
  name: "Santa Clause",
  alias: "Kris Kringle",
  married: true,
  pets: {
    reindeer: ["Dasher", "Dance", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen", "Rudolph"]
  },
  address: "The North Pole",
  attire: ["Red Hat", "Red Coat", "White Beard", "Bag o toys"],
  mood: "jolly",
  helpers: "elves",
  friends: ["Frosty", "Father Time", "Tooth Fairy", "Easter Bunny"],
  favorites: {
    drink: "Hot Chocolate",
    song: "Santa Clause is coming to town",
    food: "Milk and Cookies"
  },
  list: ["ake the list", "Check it once", "Check it again", "Find out who is naughty or nice"]
}

console.log(person);
console.log(person.name);
// We use dot notation to access keys inside of an object: object.key;
console.log(person.pets.reindeer[0]);

// DOT NOTATION can also be used to ASSIGN NEW PROPERTIES
// Syntax: objectName.nameOfNewProperty = "new value";

person.jobTitle = "Toymaker";
console.log(person)

person.friends.push("Jack Frost")
console.log(person.friends)