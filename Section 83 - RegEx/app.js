// let re;
// re = /hello/i;


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
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

let re;
// Literal Characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // ^ = Must start with (i is case insensitive)
re = /world$/i; // $ = Must end with
re = /^hello$/i; // Must begin and end with hello.
re = /^h.llo$/i; // Matches any ONE character
re = /^h*llo$/i; // Matches any character 0 or more times. 
re = /gra?e?y/i; // Optional character 
re = /gre?a?y\?/i; // escape character


// string to match
const str = 'Gray';

// log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`)
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);








