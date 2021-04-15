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

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must an an a or e 
re = /[GF]ray/; // Must an an uppercase G or F
re = /[^GF]ray/; // Will match anything other than G or F
re = /[A-Z]/; // match any uppercase character
re = /[a-z]/; // match any lowercase letter 
re = /[A-Za-z]/; // match any letter
re = /[0-9]/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2, 4}o/i; // l Must occur between 2 and 4 times.
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/; //  would look for number 0-9x 3xs 

// Shorthand Character Classes

re = /\w/; // any Word character, any alphanumeric or _ (has to be letter number or underscore)
re = /\w+/; // += 1 or more word characters
re = /\W/; // Non-word characters (anything but number letter or underscore)
re = /\d/; // Match any digit
re = /\d+/; // Match += 1 or more digits
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // word boundary

// Assertions
re = /x(?=y)/; // Match x only if it's followed by y
re = /x(?!y)/; // Match x only if it's NOT followed by y



// string to match
const str = 'x';

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








