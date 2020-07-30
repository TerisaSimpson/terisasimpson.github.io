/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'burr';
console.log(myName); // prints => burr

// 3. re-assignment //
myName = 'mulligan';
console.log(myName); // prints => mulligan

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/* var, let, const
 * 
 * ways to declare a variable. 
 *
 */
 
 // 5. let //
 // let is the same as var inside a function and global scope
 // let cannot be redeclared if var or const were used to originally declare the variable
 let lizardAge = 89; // => declaring a variable lizardAge and assign it to 89
 
 // let variables have a block scope
 // variables inside {} cannot be accessed outside of the curly brackets
 
 function lizard() {
    let  age = 89
 }
 
 //age cannot be accessed outside the function lizard
 
 
//let and const declarations can only be accessed within their block
//let and const are both hoisted to the top but are not initialized 

 
 
 
 
 // 6. const //
 //stands for 'constants'
 //cannot be changed
 //const must be initialized during declaration, unlike let and var

// const age = 2; // => prints 2
// age = 5; // an error will occur because it has already been assigned 
 
 //const is great when you have values that you know should not change. 
 const hamiltonOffBroadway = 2015; // => prints year Hamilton was off broadway
 const hamiltonFirstTour = 2017; // => prints year Hamilton was on tour
 const hamiltonSecondTour = 2019; // => prints year Hamilton was on the second tour
 
 
 // 7. Hoisting //
 /* Hoisting is the default behavior of moving all declarations to the top of the current scope. Variables are able to be declared after they’re assigned.
  */
  
  //animal = dog; // in the code, the dog has been assigned to animal.
 // var animal;  // declares the variable later in the code