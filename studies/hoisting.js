/* Hoisting 
 * 
 * 0. Hoisting is when declarations of a variable or function are moved to the top of their scope before the code has been executed. - It is moved to the top
 *    Variables are able to be used before they have been declared. 
 *    Functions and variables can be hoisted. 
 * 
 * How are variables hoisted in JavaScript?
 * var will say "undefined" and then run the value of the variable. 
 * let and const cannot be hoisted. 
 *
 * How are function declarations hoisted? How are function expressions hoisted?
 * Function declarations can be hoisted, to the top of it's scope, and are used before they are delcared. 
 * Function expressions are hoisted like variables declared with the var keyword, the variable get’s hoisted without it’s assignment
 
 * What is the JS Interpreter?
 * The JS interpreter reads through our code to see what we are trying to execute, and perform that action. 
 * It is also able to see what our errors are and what we need to fix; i.e. syntax error, reference error
 * It converts our language with the binary system that the computer will be able to understand. 
 *
 */
 
 
 // Variables Hoisted
 
 //var
 var hoist; // the variable has been declared but not assigned
 
 console.log(hoist); // => print undefined 
 hoist = "This variable has been hoisted"; // the variable has now been assigned
 console.log(hoist); // => print "This variable has been hoisted"
 
 
// let 
console.log(hoisting); // => ReferenceError Cannot access 'hoisting' before intializing
let hoisting = "The variable has been hoisted";


// const
console.log(hoisted); // => ReferenceError Cannot access 'hoisted' before intializing
let hoisted = "The variable has been hoisted";


// Functions Hoisted 

functionHosited(); // function called

function functionHosited() {
    console.log("This is a function being hoisted"); // function defined
}