// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

let makeContactObject = {
   id: id, 
   nameFirst: nameFirst, 
   nameLast: nameLast
}

return makeContactObject
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //container for contact list
    
    return {
        // we implemented the length api for you //
        length: function() {// an anonymous function
            return contacts.length; //returns the length of the contact array
        },
        addContact: function(contact) {
            contacts.push(contact); //pushs inputed contact
        },
        findContact: function(fullName) {
            //for loop over the length of the array
            //if sstatment to check fullName is in list and if true return informaion about the contact, otherwise return undfined others
            //condition for if is if the fullName is the same as the contacts
            for (var i = 0; i < contacts.length; i++){
                if (fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]){
                    return contacts[i];
                }
            }
        },
        removeContact: function(contact){
            //looking for the index of the contact and removing it
            //loop through each contact
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i] === contact){
                    //remove an entire contact
                    return contacts.splice(i,1);
                }
            }
        },
         printAllContactNames: function(){ 
    
            var newArray = []; //created array to push contacts in

            for(var i = 0; i < contacts.length; i++){ //loop over array to print the contact

            var fullName = contacts[i]['nameFirst'] + " " + contacts[i]['nameLast'];
            newArray.push(fullName); 
            }
            return newArray.join('\n'); 
            
    }
        
    };
    
    // return manageContactObject;
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
