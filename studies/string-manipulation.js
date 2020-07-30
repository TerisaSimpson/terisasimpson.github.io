//STRING MANIPULATION
/* 
 * 0. strings is an object. can be used with properties and methods on strings. 
 */

// 1. With Operators
// concatenation operator (+) - strings that need to be combined with other kinds of data
var age = 19;
var info = "My name is Phillip Hamilton, I am " + age + " years old."; 
console.log(info) // print => "My name is Phillip Hamilton, I am 19 years old."

//assignment operator (+=) - another way to combine strings
var greeting = "Hi There"

console.log(greeting += " Phillip") // print => "Hi There Phillip"

// 2. With String Methods

//charAt() - returns character at a specific location
var name = "Angelica";
name.charAt(0); // => print A

// toUpperCase() - coverts a string to uppercase letters
var name = "Angelica";
name.toUpperCase(); // => print ANGELICA

// toLowerCase() - coverts a string to lower case letters
var name = "ANGELICA";
name.toLowerCase(); // => print angelica

// split() - covert a string to an array
var name = "Angelica";
name.split(); // => prints [a, n, g, e, l, i, c, a]

// slice() - lets you select a part of a string
var name = "Angelica";
name.slice(1,5); // => prints ngeli

// substring() - part of the string is returned
var name = "Angelica";
name.substring(1,2); // => prints "ng"