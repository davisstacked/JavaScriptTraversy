
// 8. DATA TYPES IN JAVASCRIPT

// PRIMITIVE

// String
const name = 'John Doe';
console.log(typeof name)

//Number
const age = 45;
console.log(typeof age);

// Null
const car = null;

//Undefined
let test;
//Symbol
const sym = Symbol();

//Reference types - objects


// 10. NUMBERS AND THE MATH OBJECT
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;

// Math Object
// gives us PI
val = Math.PI;
// Gives us Euler's number 2.17?
val = Math.E;
// rounds number to closest whole number.
val = Math.round();
// rounds up
val = Math.ceil();
// rounds down
val = Math.floor();
// finds square root
val = Math.sqrt(64);
// gives absolute version of numbers (the positive version of a number)
val = Math.abs(-3) // will return 3. 
// get the power of something
val = Math.pow(8, 2); //8 raised to the 2nd power.
//min and max values
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// Math random
Math.floor(Math.random() * 3)


// // GENERAL LOOPS
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number');
//     // continue moves to the next index without running the next code... in this case stops it from running either of the next console logs etc.
//     continue;
//   }
//   if (i === 5) {
//     console.log('Stop the loop');
//     break;
//   }
//   console.log('Number ' + i);
// }

// While loop 

// let i = 0;

// while (i < 10) {
//   console.log('number ' + i);
//   i++;
// }

// DO WHILE - a do-while loop will ALWAYS RUN ONCE no matter what. this is the only difference between a while and a do-while loop. 

// let i = 0;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while (i < 10);

//FOR EACH
// use forEach while looping through an array instead of other syntax if possible. 
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// cars.forEach(car => {
//   console.log(car);
// });

// MAP
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sara' },
  { id: 3, name: 'Karen' }
];

const ids = users.map(user => {
  return user.id;
});

console.log(ids);

// //KEY IN - VALUE OF
// for (let x in user) {
//   console.log(
// }

// 17. SWITCHES

const color = 'red';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break; 
}

// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' }
// ];

// 20. a look at the window object

// Alert
//alert('Hello World');

// Prompt 
// const input = prompt();
// console.log(prompt());

//Confirm 
// if (confirm('Are you sure')) {
//   console.log('yes');
// } else {
//   console.log('no');
// }


// 26. TRAVERSING THE DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item'); // selects first li with class of collection-item

// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes; //includes text nodes. like breaks add text nodes to the DOM tree.
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[0].nodeType;

// // get children element nodes
// val = list.children; // can get nodes without text nodes or other extras. just the elements. which is MOST LIKELY WHAT TO USE. 
// val = list.children[1]; 
// val = list.children[1].textContent = 'Hello';

// console.log(val);
 

// 48. using object.create

// const personPrototypes = {
//   greeting: function () {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function (newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson')

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes), {
//   firstName: {value: 'Brad'}
// }

//49. ES6 classes
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear)
//   }
// }

// const mary = new Person('Mary', 'Williams');

// // console.log(mary.greeting());

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost()
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

// console.log(john);

// // 66. ES6 Promises
// function createPost(post) {
//   return new Promise((resolve, reject) => { 

//     setTimeout(function () {
//       posts.push(post);
//       resolve();
//     }, 2000);
//   });

// }




