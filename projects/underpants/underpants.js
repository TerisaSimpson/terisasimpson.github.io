// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//takes in any vaue and it returns its value unchanged

 _.identity = function(value){
    //return value unchanged
    return value
}




/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


_.typeOf = function(value){
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
}


// if(Array.isArray(value) === true){
//     return "array"
// }
// if (value === "null"){
//     return "null"
// }
// if (value instanceof Date){
//     return "date"
// } else {
//     return typeof value
// }


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/


_.first = function(array, number){ //input of array and number
    if(!Array.isArray(array)){ //test array, if its not the array
        return [] //return literal array
    } else if (typeof number === "undefined"){ //if number is undefined
        return array[0] //return first index of array
    } else { 
        return array.splice(0, number) //otherwise return the first numbers of array
    }
}


// _.first = function(array, number){
//     for (var i = 0; i <= array.length-1; i++){
//     if (Array.isArray(value) !== "array"){
//         return []
//     } else if (!Number(value) || NaN){
//         return array[0]
//     } else {
//         return array[i]
//     }
// }
// }







/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/


_.last = function(array, number){
    if(!Array.isArray(array)){//if array is not an array
        return []; //return literal array
    }else if(number > array.length ){ //if number is greater than array.length
        return array; //return array
    }else if(number){ //if number is true
        return array.splice(array.length - number, number); //return array with the length of array - number,and the number
    }else if(!number){ //if not a number
        return array.pop(); //take off last element in array
    }
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


_.indexOf = function(array, value){ 
    for (var i = 0; i <= array.length-1; i++){ //for loop through array
        if (array[i] === value){ //if value is in the array, return the index
            return i
        } 
    } if (value !== array[i]){ //if value is not in array, return -1
        return -1
    }
}





/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


_.contains = function(array, value){
    return array.includes(value) ? true : false //if the value is in the array, return true, if not return false
}





/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/



_.each = function(collection, func){
    if (Array.isArray(collection) === "array"){ //test if collection is an array
        for (var i = 0; i < collection.length; i++){ //loop though array 
            func(collection[i], i, collection) //for each element, call the func with elements, index, and collection
        } 
    } if (typeof collection === "object"){ //if it is an object
        for (var key in collection){ //loop through key
            func(collection[key], key, collection) //call func for each argument
        }
    }
}







/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/



_.unique = function(array){

var newArray = [] //create new array

for (var i = 0; i < array.length; i++){ //loop over array
    if (_.indexOf(newArray, array[i]) === -1){ //
        newArray.push(array[i]) //push elements into index
    }
}

return newArray //return array
}







/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// _.filter = function(array, func){
//     var newArray = [];
//     for (var i = 0; i <= array.length-1; i++){
//         if (func(array[i], i, array)){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray
// };




_.filter = function(array, func){
    var newArray = [] //create new array
    
    _.each(array, function(e, i, a){ //loop over array and function
        if (func(e, i, a)){ //if function and arguments are true
            newArray.push(e) //return new array with the element inside
        }
    });
    return newArray //return array
}








/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/



_.reject = function(array, func){
    var newArray = [] //create array
    _.filter(array, function(e, i, a){ //filter through the array and function for each element
        if (!func(e,i,a)){ //if function is false
            newArray.push(e) //return new array of elements
        }
    })
    return newArray// return array
}







/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/


_.partition = function(array, func){
    var truthy = [] //an array for truthy
    var falsey = [] //an array for falsey
    
    _.each(array, function(e, k, a){ //use each to loop over array and function
        if (func(e,k,a)){ //if the arguments are true
            truthy.push(e) //push the elements into truthy array
        } else {
            falsey.push(e) //push the elements into falsey array
        }
    })
    
    var bothArrays = [] //create an array for both arrays
    bothArrays.push(truthy, falsey) //add both arrays into new array
    return bothArrays //return array
}








/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
    var newArray = [] //create a new array
    
    
    
    if (Array.isArray(collection)){ //test if the collection is an array
        for (var i = 0; i <= collection.length-1; i++){ //loop over the collection
           newArray.push(func(collection[i], i, collection)) //push the function arguments in the array
        }
    }
   else if (typeof collection === "object"){ //test for object
        for (var key in collection){ //loop over object
            newArray.push(func(collection[key], key, collection)) //push the function arguments in the array
        }
    }
    return newArray //return array
}







/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/


_.pluck = function(array, prop){ //array and property 
    return  _.map(array, function(e, i, a){ //return the map function
        return e[prop]
    })
       
    
    
  
}





// _.pluck = function(array, prop){
//     var newArray = []
//     for (var i = 0; i <= array.length-1; i++){
//       newArray.push(array[i][prop])
//     }
    
//   return newArray
// }






/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


_.every = function (collection, func) {
        if (func === undefined) { //checking if function is undefined
        for (let i in collection) { //looping over collection
            if ((!!collection[i]) === false) { //collection elements are false
                return false; //return false
            }
        }
        return true; //if not, return true
    } else if (Array.isArray(collection)) { //checking to see if the collection is an array
        for (let i = 0; i < collection.length; i++) { //loop over collection
            if (func(collection[i], i, collection) === false) { //checking the function with the collection element, index, and collection to see if false 
                return false; //return false if false
            }
        }
        return true; //if not, return true
    } else {
        for (let key in collection) { //looping over objects
            if (func(collection[key], key, collection) === false) { //if the current value, current key, and collection are false
                return false; //return false
            }
        }
        return true; //if not, return true
    }                                                   
}






/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

 _.some = function (collection, func) {
        if (func === undefined) { //checking if function is undefined
        for (let i in collection) { //looping over collection
            if ((!!collection[i]) === true) { //collection elements are true
                return true; //return true
            }
        }
        return false; //if not, return false
    } else if (Array.isArray(collection)) { //checking to see if the collection is an array
        for (let i = 0; i < collection.length; i++) { //loop over collection
            if (func(collection[i], i, collection) === true) { //checking the function with the collection element, index, and collection to see if true 
                return true; //return true if true
            }
        }
        return false; //if not, return false
    } else {
        for (let key in collection) { //looping over objects
            if (func(collection[key], key, collection) === true) { //if the current value, current key, and collection are true
                return true; //return true
            }
        }
        return false; //if not, return false
    }                                                   
}








/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


// _.reduce = function (arr, func, seed){ 
//     //check to see if seed exists
//     let previousResult;
//     if (seed !== undefined){//if seed is given
//     previousResult = seed; //if seed given, assign to "previous result"
//     _.each(arr, function(e, i, a) {
//         previousResult = func(previousResult, e, i, a)//previous must be called
//     })
//     } else {//if seed not given
//         previousResult = arr[0]
//         //start at net index is the seed in the element at the 0th index
//         for (let i = 1; i < arr.length; i++){
//             //call our func function on the prevResult, e, i, arr
//             previousResult = func(previousResult, arr[i], i, arr)
//         }
//     }
//     //after last function call, return value for prevResult
//     return previousResult
// }





_.reduce = function(array, func, seed){
    
    var result = 0
    var i = 0
    if (typeof seed === "number"){
        result = seed
    } else {
        result = array[0] 
        i = 1
    }
    while (i <= array.length-1){
      result = func(result, array[i], i)
      i++
    }
    return result
}








/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function (obj1, ...otherObjs){
    //use each to iterate over otherObjs array
    
    _.each(otherObjs, function(e, i, a){
        //the element is going to represent each object in the array
        for (let key in e){
            //add the key/val pair to obj1
            obj1[key] = e[key]
        }
        })
        //output: updated object
        return obj1
    }





//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
