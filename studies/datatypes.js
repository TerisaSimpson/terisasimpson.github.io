/*
* DATATYPES: 
* 
* 0. There are six main data types that are seperated in two categories - Simple (Primitive) and Complex.
*/

// 1. Number
// a numerical value - no quotes needed
// numbers can be negative and positive
var hamiltonsBirthYear = 1755;
console.log(47 + hamiltonsBirthYear); // prints 1804

var hamiltonsSecretaryofTreasury = 1789;
console.log(hamiltonsSecretaryofTreasury + 6); // prints 1795

var num3 = -10;
console.log(num3 + 1); // prints -9


// 2. String
// store text. strings must be inside a single or double quotes
var whatIsYourName = "My name is Alexander Hamilton";
console.log(whatIsYourName); // prints My name is Alexander Hamilton


// strings are indexed
// every character has a position that starts at 0
var college = "Kings College";  // inside of 'Kings College', the positions for each letter are counted started at 1
// if we wanted to pull out a specific letter in the word, we'd use a brack notations with the index
console.log(college[3]); // => prints g


// length in strings
// Using .length shows us how many characters are in the word, starting from 1
console.log(college.length); // => prints out 13 because there are 13 characters in the words 'Kings College'


// 3. Boolean
// true or false - it is like "on and off" or "yes and no"
var cheated = true;
console.log(cheated); //prints true
var notAnOrphan = false;
console.log(notAnOrphan); // prints false


//4. Arrays
// an ordered collection of values
// measured within in index
// numbers start counting with 0
// written within brackets. ex: [ ]
// seperated by commas
var friends = ["Lafayette", "Mulligan", "Laurens"];

// accessing the index - each item in an array has a location number that starts with 0
friends[0]; 
console.log(friends[0]); // => prints Lafayette
friends[2]; 
console.log(friends[2]); // => prints Laurens
friends[1]; 
console.log(friends[1]); // => prints Mulligan

// changing an element
friends[2] = "Burr"; // replacing Mulligan with Burr
console.log(friends); // => prints ["Lafayette", "Laurens", "Burr"];

// .length
// to see how many items are in the array
friends.length; // => prints 3
friends[friends.length-1]; // => access the last element in the array without counting each number

//frequently used methods for arrays
//.unshift() //add to the beginning
friends.unshift("Washington")// Washington is now added to the front of friends
//.pop() //takes away from the end
friends.pop() // Takes off Burr
//.shift() // remove from the beginning
friends.shift() // Takes off Washington
//.push() // adds to the end
friends.push("Jeffereson") //adds Jefferson to the end 


// 5. Object
// collection of key/value pairs that are called properties
// written in curly brackets { }.
// written as 'name:value' pairs
// seprated by commas
var schuylers = {
    mother: "Catherine",
    father: "Philip",
};
console.log(schuylers); //calling object

// Getting information out of an object
schuylers.mother // => prints Catherine
schuylers.father // => prints Philip

// Adding ifnormation to an object
schuylers.daughters = ["Angelica", "Eliza", "Peggy", "Catherine", "Corenelia"]  // adds the array of characters to the the object 
schuylers.sons = 2 // adds the sons: 2 properties to the schuylers


// 6. Function
// reusable procedures
// a chunk of code that allows us to use multiple times throughout our code
// 1. Define functions  2. Execute functions
function myShotChorus() {
    console.log("I am not throwing away my shot")
    console.log("I am not throwing away my shot")
    console.log("Hey yo, I'm just like my country")
    console.log("I'm young, scrappy, and hungry")
    console.log("And I'm not throwing away my shot")
} //defining functions

myShotChorus(); // call the function


// parameters and arguments are what we use to help call the function
function myShotLyrics(versus1, chorus) {
    console.log(chorus)
    console.log(versus1)
}

myShotLyrics("imma get scholarship to King's College", myShotChorus()) // => versus then a callback for the chrous

// "myShotLyrics" is the function name
// (versus1, chrous) are the parameters
// myShotLyrics("imma get scholarship to King's College", myShotChorus()) are the arguments in the function 


// 7. undefined
// a variable has been identified by not yet assigned
var dearTheodosia;
console.log(dearTheodosia); // => prints undefined 


// 8. null
// identified by the user to purposly be assigned as 'no value'
var waitForIt; 
console.log(waitForIt);
waitForIt = "Burr"
console.log(waitForIt)
waitForIt = null;
console.log(waitForIt)


// 9. NaN
// also known as 'Not a Number'
0 / 0 // => NaN


// 10. Infinity and -Infinity
//Infinity is a value that is greater than any other number
console.log(Infinity);

//-Infinity is a value which is the lowest available


//Question: What is the difference between simple (primitive) and complex data types?
//Answer: Simple data types are immutable, that do not alter the original value. Complex data types are mutable, and can change it's values and be referenced throughout the code.


//Simple (Primitive) values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
//Simple values
var a = 8;
var b = a;
console.log(a) // prints => 8
console.log(b) // prints => 8
//b is just making a copy of a, but 8 is never changed, no matter what we do to be

//Complex values
var a = {
    c: 13
};

var b = a;
b.c = 90
console.log(a) // print { c: 90 }
// a was assigned to b, and then changed the value of b, which changed a
