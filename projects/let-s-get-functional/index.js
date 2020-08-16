// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-terisasimpson");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //must use the filter function to filter out the male customers 
    //output must be a number
    return _.filter(array, function(customer){
        //return a conition that resolves to true or false based on the argument
        //test if the customer object has a gender prop of male
        return customer.gender === "male"
    }).length
};

var femaleCount = function(array){
   return  _.reduce(array, function(totalNum, currNum){
        if (currNum.gender === "female"){
            totalNum++
        }
        return totalNum
    },0)
}



var oldestCustomer = function(array){
    
    
   return  _.reduce(array, function(oldest, currentCustomer){
        if (oldest.age >= currentCustomer.age){
           return  oldest
           } else {
               return currentCustomer
           }
        
    }).name
    
}




var youngestCustomer = function(array){
    // return _.reduce(array, function(youngCust, currCust){
    //   return Math.min(youngCust.age, currCust.age)
        
    // }).name
    
    
    return _.reduce(array, function(youngCust, currCust){
        if (youngCust.age <= currCust.age){
            return youngCust
        } else {
            return currCust
        }
        
    }).name
    
}

var averageBalance = function(array){
    return _.reduce(array, function(totalBalance, currBalance){
        if (totalBalance.balance >= currBalance.balance){
            totalBalance
        } else {
            currBalance
        }
        return totalBalance/array.length
    })
}

var firstLetterCount = function(array, letter){
    // Given a letter
    // look at the name property
    // name is a string - treat it as an array at index 0
        // count that name.
        
    var firstNameLetter = _.reduce(array, function(seed, element, index, array){
        // if the name begins with letter if index 0 === letter
        // should satisfy upper or lower case -- change all cases to UpperCase
        if(element.name.toUpperCase()[0] === letter.toUpperCase()){
            seed = seed + 1;
        } 
        return seed;
    }, 0);
    
    return firstNameLetter; 
};






var friendFirstLetterCount =  function(array, name, letter){
    //I:array, name, letter 
    //O: a collection of data with same name in friends list 
    //C:
var newArray; //create new array
 for (var i = 0; i < array.length; i++){ //looping through the customer array 
     if(array[i]["name"] === name){ //checking to see if name in customer array matches the name
         newArray = (array[i]["friends"]); //if match is found push the contents of the friend property to the newArray
     }
 }
console.log(newArray);  //checking newArray
 var count = 0; //setting up count variable to hold number 
 for (var i = 0; i < newArray.length; i++){ //looping through the newArray with the customer's friends in it
     if(newArray[i]["name"].charAt(0) === letter.toUpperCase()){ //checking first letter of names in new array
         count++ //increasing count by one each time a letter match is found
     }
 }
 return count; //return count
}





var friendsCount = function(array, names){
    //iterate through the list and find the people who are friends with said person
     var sharedFriend = [];
   // use the callback function to check to see if that friendsName is in that list of friends
    var custCount = _.reduce(array,function(seed, element, index){
        
        for(var i = 0; i < element.friends.length; i++){
            // console.log(element.name);

                if(names === element.friends[i].name){
                    // console.log(element.name);
                  seed = element.name;
                sharedFriend.push(seed);  
        }
        }
    } );
    //if yes return friend into array
    
    return sharedFriend;
  

}






var topThreeTags = function(array){
   //I:array
    //O:array of top three tags 
    //C:
    const tags = _.pluck(array,"tags");// create a tags variable that uses pluck
    var uniqueTags = tags[0];//create a uniqueTags variable 
    for(let i = 1; i <= tags.length - 1; i++){// for loop over tags array
        for(let j = 0; j <= tags[i].length - 1; j++){// loop over the index of tags
            uniqueTags.push(tags[i][j]);//push both variables i and j into unique tags
        }
    }
    uniqueTags=_.unique(uniqueTags);//reassgining unique tags using unique function
    var counts = {};// create a literal object
    for(let l = 0; l <= uniqueTags.length - 1; l++){// for loop over array 
        counts[uniqueTags[l]]=0// initializes count 
        for(let k = 0; k <= tags.length-1; k++){//loop over array
            if(_.contains(tags[k],uniqueTags[l])){//
                counts[uniqueTags[l]]++;// increments by one 
            }
        }
    }
    var top = []// create new array
    var highest;// declare highest variable
    while(top.length < 3){// while loop will run until top three tags acquired 
        var start = 0;//initialize comparison placeholder
        for(var key in counts){// for in loop to access data within count 
            if(counts[key] > start){// if value of counts is greater than comparison
                highest = key;// assigns tag to highest
                start = counts[key];// assigns comparison to new highest value
            }
        }
        top.push(highest);// adds highest count tag to top array
        delete counts[highest];// removes highest count tag from counts object to avoid multiple instances
    }
    return top;
}





var genderCount = function(array){
    return _.reduce(array,function(totalGender, currGender){
        var speificGender = currGender.gender
        if (totalGender[speificGender]){
            totalGender[speificGender]++
        } else {
            totalGender[speificGender] = 0
        }
        return totalGender
    },{})
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
