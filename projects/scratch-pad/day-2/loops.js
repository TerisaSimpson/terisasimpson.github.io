// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //loop over the away using for loop
  for (let i = 0; i <= array.length-1; i++){
    //console log the array and the index using bracket notation to print out the array
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //loop backwards over array
  //use for loop
  for (let i = array.length-1; i >= 0; i--){
    console.log(array[i])
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //return array with object keys
  let newArray = []
  
  //use a for in loop
  for (let key in object){
    //i want to add the keys from the object into an array
    //use .push method bc newArray is an array
    //pushing the (key) because that is how you get access to the key
    newArray.push(key)
  }
  
  //return newArray
  console.log(newArray);
  return newArray;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over Object using for in loop
  //print its keys
  
  for (let key in object){
    console.log(key)
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //return array with object values
  //create array literal
  let arrayValues = [];
  
  //use for in loop
  for (let key in object){
    arrayValues.push(object[key])
  }
  
  return arrayValues
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //print over object using for in loop
  for (let key in object){
    //print values
    console.log(object[key])
  }
 
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  // let objectPairs = Object.keys(object)
  
  // return objectPairs.length
  
  //create literal array 
  let objectPairs = []
  //use for in loop to loop over object
  for (let key in object){
    //push object keys into array
    objectPairs.push(key)
  }
  
  //return array.length
  return objectPairs.length
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over object in reverse
  //print values
  
  //create a literal array
  let reverseObject = []
  
  //use for in loop to loop forward over object and getting its values
  for (let key in object){
    reverseObject.push(object[key])
  }
  
  //use for loop to reverse the array with the object keys
  for (let i = reverseObject.length-1; i >= 0; i--){
    console.log(reverseObject[i])
  }
  

// console.log(reverseObject.reverse())
  
  
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
