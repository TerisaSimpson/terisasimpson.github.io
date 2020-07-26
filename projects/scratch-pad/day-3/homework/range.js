// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    // let newRange = []
    
    // for (let i = start; i < end; i++){
    //     if (start[i] > end[i]){
    //         return 
    //     }
    // }
    
    
    //make a new range 
    
    
    let newRange = [] //create a new array to push numbers in
    
    if (start < end){ //create a condition that states if start is less than end, then to loop
      for (let i = start; i <= end; i++){ //loop forward
          newRange.push(i); //push the numbers into the newRange array
      }
    } else { //if not 
        for (let i = start; i >= end; i--){ //loop backwards
            newRange.push(i); //push the numbers into the newRange array
        }
    }
    
    
    return newRange //return newRange
    
    
    
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}