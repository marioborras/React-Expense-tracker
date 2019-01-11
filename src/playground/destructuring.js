console.log("destructuring");
//Object Destructuring

// const person = {
//   name: "Mario",
//   age: 33,
//   location: {
//     city: "Media",
//     temp: 38
//   }
// };

// const { name: firstName = "anonymous", age } = person;
// const { city, temp: temperature } = person.location;
// console.log(`${firstName} is ${age}`);
// console.log(`it is ${temperature} degrees in ${city}`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "self-published" } = book.publisher;

// console.log(publisherName);

//Array Destructuring

const address = ["1299 S Juniper Street", "Philadelphia", "Pennsylvania", "19147"];

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
//grab first item and third item using array destructuring
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);
