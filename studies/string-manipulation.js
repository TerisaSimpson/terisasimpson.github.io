//STRING MANIPULATION
/* 
 * 0. strings is an object. can be used with properties and methods on strings. 
 */

// 1. With Operators
// concatenation operator (+) - strings that need to be combined with other kinds of data
var age = 90;
var info = "My name is Rose, I am " + age + " years old."; 
console.log(info) // print => "My name is Rose, I am 90 years old."

//assignment operator (+=) - another way to combine strings
var greeting = "Hi There"

console.log(greeting += " Rose") // print => "Hi There Rose"

// 2. With String Methods

//charAt() - returns character at a specific location
var name = "Terisa";
name.charAt(0); // => print T

// toUpperCase() - coverts a string to uppercase letters
var name = "terisa";
name.toUpperCase(); // => print TERISA

// toLowerCase() - coverts a string to lower case letters
var name = "TERISA";
name.toLowerCase(); // => print terisa

// split() - covert a string to an array
var name = "Terisa";
name.split(); // => prints [t,e,r,i,s,a]

// slice() - lets you select a part of a string
var name = "Terisa";
name.slice(1,3); // => prints er

// substring() - part of the string is returned
var name = "Terisa";
name.substring(1,5); // => prints "eris"