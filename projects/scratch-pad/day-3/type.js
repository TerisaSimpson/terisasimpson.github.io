// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //return true if its array
    if (Array.isArray(value)){
        return true
    } else {
        //if not return false
        return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //test array
    //test null
    //test date
    //test object
  if (Array.isArray(value)){
      return false
  } else if (value === null) {
    return false
  } else if (value instanceof Date){
      return false
  } else if (typeof value === "object"){
      return true
  } else {
      return false
  }
    
    //  if (Array.isArray(value) || value === null || value instanceof Date){
    //     return false
    // } else if (typeof value === "object") {
    //     return true
    // } else {
    //     return false
    // }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //return true if value is array or object
    //return false if value is not an array or object
    
    if(value === null || value instanceof Date){
        return false
    } else if (Array.isArray(value) || typeof value === "object"){
        return true
    } else {
        return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    
    
    if (typeof value === "string"){ //test for string
        return "string" //return string
    } else if (Array.isArray(value)) { //test for array
        return "array" //return array
    } else if (typeof value === "undefined"){ //test for undefined
        return "undefined" //returned undefined
    } else if (typeof value === "number"){ //test for number
        return "number" //return number
    } else if (typeof value === "boolean"){ //test for boolean
        return "boolean" //return boolean
    } else if (value === null){ //test for null
        return "null" //return null
    } else if (typeof value === "function"){ //test for function
        return "function" //return function
    } else if (value instanceof Date){ //test for date
        return "date" //return date
    } else if (typeof value === "object"){ //test for object
        return "object" //return object
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
