let re;
re = /hello/i;


// console.log(re);
// console.log(re.source);

// exec() - return result in an array or null 
// const result = re.exec('hello world');

// console.log(result);

// test() returns true or false if there's a match
// const result = re.test('hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return a new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);