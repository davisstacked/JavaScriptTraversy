// Basic structure

// (function () {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

// // Standard Module Pattern
// const UICtrl = (function () {
//   let text = 'Hello World';
  
//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  functiong get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})


ItemCtrl.add({ id: 1, name: 'John' });














