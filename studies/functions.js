//FUNCTIONS

//The two phases to using functions: First we must _Define functions__? Next we can execute (or two other words for executing a function?) a function by?

function functionName(parameter1, parameter2) {
  return parameter1 + parameter2;
}

functionName(100, 200); //excuting a function

//What’s the difference between a function’s parameters and arguments PASSED to a function?

//A function's parameter is at the top of the function, when defining a name. You are able to have as many parameter as you would like. 
//A function's argument is located when calling a function. the arguments support the parameters and give the arguments value to pass.

function functionName(parameter1, parameter2) { // <= parameters
  return parameter1 + parameter2;
}

functionName(100, 200); // <== arguments


//What’s the syntax for a NAMED function?

function functionName(parameter1, parameter2) { 
  return parameter1 + parameter2;
}

functionName(100, 200); 


//How do we assign a function to a variable?

//We assign a function to a variable by naming a variable and adding the function to it, this is called a function expression. 

var functionTesting =  function functionName(){
  console.log("my name is 'Alexander Hamilton'")

}
functionTesting()


//Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
//Using IOCE

//Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

//Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures!

/* 
 * Closures
 *
 * A closure is a function that retains access to an outer/enclosing function’s params or variables
 * it is located inside the body of a function, so when the function is involked, it has access to it's global scope
 *
 */


function schuylerSisters(sister1, sister2, sister3){
  var introduction = "The Schuyler Sisters "
  function schuylerIntro(){
    return introduction + (sister1 + ", " + sister2 + ", and " + sister3)
  }
  return schuylerIntro()
}

var werkWerk = schuylerSisters("Angelica", "Eliiiiiiza", "Peggy")

console.log(werkWerk) //prints "The Schuyler Sisters Angelica, Eliiiiiiza, and Peggy "