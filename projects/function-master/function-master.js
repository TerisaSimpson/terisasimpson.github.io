//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {

return Object.values(object) //return object values

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(" ") //return object keys and sperate them with a space

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { 
     var newArray = Object.values(object) //create a new array for object values
  var newStrings = [] //create a literal array to put the object in

  for (var i = 0; i <= newArray.length-1; i++){ //loop object values
    if (typeof newArray[i] === "string"){ //see if array is a string
      newStrings.push(newArray[i]) //push values into new array
    }
  }
 return newStrings.join(" ") //return new array
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //return array if it is an array
    //return object if it is an object
     if (Array.isArray(collection)){ //test if the collection is array
      return "array" //return array if its array
    } else {
      return "object" //return object if its not an array
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //Should take a string of one word, and return the word with its first letter capitalized
    //capitalize the first letter
    //concat the rest of the letters together using slice
    return string[0].toUpperCase() + string.slice(1, string.length)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //Should take a string of words and return a string with all the words capitalized
    //take a string 
    //return string with all capitalized words
    
    var newString = []
    var newString2 = []
    for (var i = 0; i <= string.length-1; i++){
      newString = newString + string[i]
    }
    var capitalWords = newString.split(" ")
    console.log(capitalWords)
    
    for (var i = 0; i <= capitalWords.length-1; i++){
     newString2.push(capitalWords[i][0].toUpperCase() + capitalWords[i].slice(1).toLowerCase())
    }

    return newString2.join(" ")
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // Should take an object with a name property and return 'Welcome <Name>!' 
    //seperate the words
    //capitalize first letter
    //lowercase the last
    //concat both
return  `Welcome ${object.name[0].toUpperCase() + object.name.slice(1, object.name.length)}!`
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Should take an object with a name an a species and return '<Name> is a <Species>'
    //seperate the words
    //capitalize first letter
    //lowercase the last
    //concat both
    
var newName = object.name[0].toUpperCase() + object.name.slice(1)
    var newSpecies = object.species[0].toUpperCase() + object.species.slice(1)
    return `${newName} is a ${newSpecies}`}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //take object
    //if noises array, return them as a string separated by a space
//if there are no noises return 'there are no noises' 

if (Array.isArray(object.noises) && object.noises.length > 0){
  return object["noises"].join(" ")
} else {
  return "there are no noises"
}
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    //see if string has the word inside of it by "includes"
 if (string.includes(word)){
      return true
    } else {
        return false
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//Should take a name and an object and add the name to the object's friends array then return the object 
//push name to object friends
object.friends.push(name)
return object //return friends
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
    
   //test if object.friends is an array and object has the name in friends
    if (Array.isArray(object.friends) && object.friends.includes(name)){
      return true //return true
    } else {
      return false //return false
    }


}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Should take a name and a list of people, and return a list of all the names that <name> is not friends with 
      var notListed = []; //create a literal array 
    for (var i = 0; i <= array.length-1; i++){ //loop the array
      if (name !== array[i].name && array[i].friends.includes(name) === false){
        notListed.push(array[i].name);
      }
    }
    return notListed;

}
    

// let notFriends = []
// for (let key in array){
//     if (array[key].name !== name){
//         if (array[key].friends.includes(name)){
            
//         } else {
//             notFriends.push(array[key].name)
//         }
//     }
// } return notFriends
// }



//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value //
  return object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    //loop through the keys in our object
    for (var key in object){
        //if the array includes an object key
        if (array.includes(key)){
            //delete that objects key
            delete object[key]
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    var dedupArray = []
    for (var i = 0; i <= array.length-1; i++){
        if (!dedupArray.includes(array[i])){
            dedupArray.push(array[i])
        }
    }
  return dedupArray
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}