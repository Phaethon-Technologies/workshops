/*
Introduction to objects
*/

// Use all the modern JS goodiness
"use strict";

// Declare an object
let userDetails = {
    "name": "Dennis M Ritchie",
    "employer": "AT&T",
    "likes computers": true,
};

// Accessing object values using dot notation
function logUserDetails(userDetails) {
    console.log(`Name -> ${userDetails.name}`);
    console.log(`Employer -> ${userDetails.employer}`);
}

// Add a new property
userDetails.age = 80;

// Remove a property
delete userDetails.employer;

// Square notation allows accessing multi word attributes and allows use of expressions
let myProperty = "name";
console.log(userDetails["likes computers"]);
console.log(userDetails[myProerty]);
