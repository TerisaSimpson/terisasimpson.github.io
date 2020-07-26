// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //base could be a string or number
    //is the given value greater than the base
    return function(value){
    if (value > base){
        return true
    } else {
        return false
    }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //base could be a string or a number
    return function(value){
        //test if value is less than the base
        if (value < base){
            //return true
            return true
        } else {
            //return false
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    
    //return a function with a string parameter
    return function(string){
        //convert the string to all lowercase letters and store in a a newStr variable

        //if the first letter of the newStr is the same as the lowercased startsWith argument, return true
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true
        } else {
            return false
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //endsWith is a single character
    return function(string){
        if (string[string.length-1].toLowerCase() === endsWith.toLowerCase()){
            return true
        } else {
            return false
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //strings are arrays
    //modify = function 
    //create a literal array to collect the collection in
    let newArray = []
    //loop over the strings
    for (let i = 0; i < strings.length; i++){
        //push the modified strings into the new array
        newArray.push(modify(strings[i]))
    }
    
    //return new array
    return newArray
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    //strings = array
    //test = function
    //return boolean 
    
    let allPass = []
    for (let i = 0; i < strings.length; i++){
        allPass.push(test(strings[i]))
    }
    
    if (allPass.includes(false)){
        return false
    } else {
        return true
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}