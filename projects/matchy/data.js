/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {} //literal object
animal.species = "Giraffe" //add key of species to animal object using dot notation
animal["name"] = "Wizard Kelly" //add key of name using bracket notation 
animal.noises = [] //add property of noises with literal array
console.log(animal) //print animal object


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [] //assign noises to empty array
noises[0] = "YERRRRR" //assign a noise
noises.push("Dead A") //assign another noises using .push
noises.unshift("Yo") //assign another noise using .unshift
noises[noises.length] = "Son" //add another noise to end of array
console.log(noises.length)//checking length of noises 
console.log(noises.length-1) //checking last element of noise
console.log(noises)


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal["noises"] = noises //assign noises to noises in animal object
animal.noises.push("Mad") //add another noise 

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 
//  animal.species //dot notation
//  animal["noises"] //bracket notation
 
//  animal.noises = [1]
//  animal.noises[noises.length-1]
 
 

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = []//assigning animals to an empty array
animals.push(animal) //adding the giraffe to animals array
console.log(animals) //console log animals

var duck = { 
    species: 'Duck', 
    name: 'Jerome', 
    noises: ['Quack', 'Honk', 'Sneeze', 'Woosh'] 
}

animals.push(duck);
console.log(animals)




var pelican = {
    species: "Pelican",
    name: "Zion",
    noises: ["Swoosh", "Ouch"]
}

animals.push(pelican)



var kid = {
    species: "Mammal", 
    name: "Infant", 
    noises: ["Waaaah", "Waaaah"]
}

animals.push(kid)

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = []//an array is good bc it doesnt matter about the order
function getRandom(array){
    return Math.floor(Math.random() * array.length)
   
}


// console.log(friends)

friends.push(animals[getRandom(animals)].name); // finds a random animal and pushes their name into the array
console.log(friends);

animals[getRandom(animals)].friends = friends; // assigns the friends array and key  to a random animal.


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}