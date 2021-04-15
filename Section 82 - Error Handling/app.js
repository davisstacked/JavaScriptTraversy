const user = { email: 'jdoe@gmail.com' };

try {
  // Produce a ReferenceError
  // myFunction();

  // produce a typeError
  // null.myFunction(); 

  

} catch (e) {
  console.log(e.message);
} finally {
  console.log('Finally runs regardless of result')
}

console.log('Program continues...');