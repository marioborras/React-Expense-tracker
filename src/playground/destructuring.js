console.log("destructuring");

const person = {
  name: "Mario",
  age: 33,
  location: {
    city: "Media",
    temp: 38
  }
};

const { name: firstName = "anonymous", age } = person;
const { city, temp: temperature } = person.location;
console.log(`${firstName} is ${age}`);
console.log(`it is ${temperature} degrees in ${city}`);

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "self-published" } = book.publisher;

console.log(publisherName);
