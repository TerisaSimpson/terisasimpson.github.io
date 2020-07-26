/* OPERATORS
 *
 * 0. Used to assign and compare operands. 
 *
 */
 
 
//Assignment Operators
// = assigns a value to a variable
var add = 4;
console.log(add);

// += adds a value to a variable
var plus = 4;
console.log(plus += 5);


// -= subtracts a value from a variable
var sub = 4;
console.log(sub -= 5);

// *= multiplies a variable
var multi = 4;
console.log(multi *= 5);

// /= divides a variable
var div = 4;
console.log(div /= 5);




//2. Arithmetic Operators

// + addition
console.log(90 + 10); // => prints 100

// - subtraction
console.log(20 - 4); // => prints 16

// * multiplication
console.log(5 * 8); // => prints 32

// / division 
console.log(49 / 7); // => prints 7

// % modulo (remainder of division)
console.log(5%5); // => prints 0



// 3. Comparison Operators
// A way to make decisions and compare on value to a second value.
// displaying true or false

// > greater than
8 < 19; // => prints true

// < less than
8 > 19; // =>  prints false

// >= greater than or equal to
19 >= 2;  // => prints true

// <= less than or equal to
13 <= 4;  // => prints false

// == equality/double equals
// looks for equality of value but not of type
// not the prefered method/ don't use

// === strict equality
// Looks to see if the values equal to each other
10 === 10 ; // => prints true because both values are the same
//10 === “10”; // => prints false because one is a number and the other is a string

// !== trict non-equality
// Checks to see if one value is NOT equal to another value
1 !== 1; // => prints false because they are the same value
//1 !== “1”;  // => prints true because one is a number and the other is a string


// 4. Logical Operators
// Able to join multiple pieces of logic
// && - the AND operator - both sides must be true in order for the expression to be true
89 === 89  &&   95 === 95;   // =>prints true because both sides are true
89 === 89  &&   96 <= 95;  // => prints false because although 89 is equal to 89, 96 is not less than or equal to 95

// || - the OR operator - One side only needs to be true, so that the whole expression will be true
var age =  16;
if (age < 12  ||  age > 5) {
console.log("You do not need an adult to see this movie");
}

// Although the first expression is false, the second expression is true, so the kids are able to go to the movies without their parents.



// 5. Unary Operators (!, typeOf, -)


// ! - NOT/bang operator
// Will return true if the expression we are applying it to returns false
// The opposite of whatever the expression is
!(30 === 30); // => prints false. (30 === 30) is true but then we put the ! in front of it, so it results to the opposite

// typeof
// identifying what type of value something is. 
var a = 10;
console.log(typeof a); // => prints number

var hello = "how are you";
console.log(typeof hello); // => prints string


// 6. Ternary Operator (a? b : c)
// an alternative to an if statement 
// the condition comes first, followed by a ?
// the truthy statement is then given, before the :
// followed by the falsey statement
var firstName = "Kirk";
var lastName = "Franklin";

firstName===lastName?console.log("yep"):console.log("nope"); 

// if the condition is true, "yep" will be printed
// if the condition is false, "nope" will be printed

