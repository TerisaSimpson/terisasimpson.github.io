/* Scopes
 *
 * What is scoping?
 * Scoping is the accessibility of variables in our code. 
 *
 * What are the different scopes in JavaScript?
 * There are two types o scopes: Global Scope (Parent Scope) and Function Scope (Child Scope)
 *
 * What variables are bound to those scopes?
 * var and let are both variables that are able to be reassigned during the code. 
 * const cannot be reassigned. 
 * var and const are only able to be used in the block that they are defined. 
 * var should be used when we know we want to use it in the global and local scope, throughout our code.
 *
 * There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? If you were in the global scope which would you access? Why?
 * 
 var a = 9 // a is defined in the global scope
function add(a) { //in the function 'add', a is also set as a parameter with the same name as the variable
  return a + 2//return a within a local scope
};

add(8) // => prints 10
console.log(a) // => prints 9
 * 
 * // To be in the function body, the parameter a will be called because it is in the local scope. 
 * The interpreter could look outside of it's scope if there was nothing defined, but because the parameter is being returned and called within the scope, it has found what it needs.
 * To be in the global scope, we would access 'var a'. Unlike the local scope that can go to the global scope, the global scope cannot go to the local scope. 
 */


//Global Scope
//Global Scope is anything outside a function.

var coldState = "New York"; //declaring a variable

function state(){ //creating a function named 'state'
    return coldState; //return hotState 
}

state(); //call the function and prints => New York

/* this example is of a Global Scope
 *Although 'coldState' was mentioned in the function, it was about to go out the function to recieve the value
 */



//Local Scope
//Local Scope is anything inside the function. 
function state(){ //creating a function named 'state'
      var coldState = "New York"; //declaring a variable  
   
}
console.log(coldState); //prints => Reference Error
/* this example is of a Local Scope. 
 *Although we are trying to console.log(coldState), because 'coldState' is inside the function and we are trying to get the value from outside of the local scope, I cannt be evaluated.
 */


// Local Scope
function state(){ //creating a function named 'state'
      var coldState = "New York"; //declaring a variable  
      console.log(coldState); //prints => New York
   
}
state();
/* this is another example of a Local Scope. 
 *The variable is declared and assigned inside the function, which means they are both in local scope, allowing the function to be called and return 'Hawaii'. 
 *
 */
 
 
// Block Scope
// Block Scope is within the if statment or loops. 
// When you see curly brackets, it is a block.

function blockScope(){
    if (true){
        var coldState1 = "New York"; //exist in function scope
        const coldState2 = "Illinois"; // exist in block scope
        let coldState3 = "Vermont"; //exit in block scope
    }
}

blockScope();