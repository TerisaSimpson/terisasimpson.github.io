/*
 * LOOPS
 *
 *
 * 0. Allows us to repeat code.
 * 
 * 1. There are multiple types of loops.
 *
 */

// Explain while, for, and for-in loops

// 1. For Loops  
// allows us to repeat something – great if you know how many times you want something to run 
/* for (start; stop; increment){
 * }
 */
 
for (var i = 1; i <= 10; i++){
console.log(i);
}

// the start condition will be 1
// the stop condition will be 10. It reads "i is less than or equal to 10"
// the increment shows we want to keep going until we reach 10
// the for loop prints 1 2 3 4 5 6 7 8 9 10

// Perect Squares (1-20)
for (var i = 0; i <= 20; i++){
    console.log(i*i);
}

// the start condition will be 1
// the stop condition will be 20
// the increment shows that we want to keep going until we reach 20
//  has been console.log to i * i, multiplying the indexes together

// to decrease numbers
for (var i = 50; i >= 40; i--){
console.log(i);
}

// the start condition will be 50
// the stop condition will 1
// the increment that we want to decrease the order
// the numbers will descend by 1, going from 50 to 40


// 2. While Loops  continues to run as long as the condition is true, an undetermined number of times

// var password = "123";
// var prompt = prompt("Enter the password");

// while (prompt !== password){
// // prompt = prompt("Enter the password");
// } 
console.log("You got it!");
 

// 3. For In Loops
// looping over objects
var hamiltonCharacters = {
    alexanderHamilton: "Lin-Manuel Miranda", 
    angelicaSchuyler: "Renee Elise Goldsberry", 
    thomasJefferson: "Daveed Diggs", 
    johnLaurens: "Anthony Ramos"
};
for (var key in hamiltonCharacters){
console.log(key); // prints the keys - alexanderHamilton, angelicaScuyler, thomasJefferson, johnLaurens
console.log(hamiltonCharacters[key]) // prints the values - Lin-Manuel Miranda, Renee Elise Goldsberry, Daveed Diggs, Anthony Ramos
}




