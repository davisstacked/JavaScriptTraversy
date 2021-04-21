// DESTRUCTURING ASSIGNMENT

let a, b;
[a, b] = [100, 200];

// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, 3: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

  // Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array resturned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike']
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// Object destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male'
}

// Old es6
// const name = person.name;
// const age = person.age,
// city = person.city;

// New es6 destructuring
const { name, age, city } = person;

console.log(name, age, city);