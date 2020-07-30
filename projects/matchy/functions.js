/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, string){ //create a function that has the param of an array and a string
    for (var i = 0; i <= array.length-1; i++){ //use a for loop to loop over array
        if (array[i].name === string){ //do a condition that searches for the array name and the string
            // console.log(array[2]);
            // console.log(array[i]);
            return array[i]; //if name is found, return animal object at the i index
        } 
    } return null;  //if not, return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){ //replace function with three paramaters
    //animals = array
    //name = string of name of animals
    //replacement = object of animals
    //if animal with name exists within animal array, replace its object with replacement object
    for (var i = 0; i <= animals.length-1; i++){
        if (animals[i].name === name){
            return animals.splice(i,1, replacement) //replace animals using splice
        }
    }
}





//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    //animals = array
    //name = an animal to perform search
    for (var i = 0; i <= animals.length-1; i++){
        //if animal with the name exists
        if (animals[i].name === name){
            return animals.splice(i,1)
        }
    }
    
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    //animals = array
    //animal = object representing a new animal
    
    // var animalLength = Object.values(animal.name).length //get the length of the name in the animal object
    // var animalSpecies = Object.values(animal.species).length //get the length of the species in the animal object
    // //check if the length is more than one character in the name or species
    // //if the name is already listed
    // if (animalLength > 0 && animalSpecies > 0 && (!animal.name.includes(animal.name))){
    //     return animals.push(animal) //return the new object in the animals array
    // } 
    // }
    
    
   if (animal["name"].length > 0 && animal["species"].length > 0){
        for (var i = 0; i <= animals.length-1; i++){
            if (animals[i]["name"] === animal["name"]){
                return;
            }
        }
        return animals.push(animal)
    }
    
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
