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
console.log(userDetails[myProperty]);

// Using a value received from user as the property name
let device = prompt("Which device would you like to buy?", "Computer");
let cartInfo = {
    [device]: 10,
}

// Property value shorthand
function returnObject(name, age) {
    return {
        name, // Same as "name": name
        age, // Same as "age": age
        "employer": "ACME",
    }
}

// Accessing a non-existing property inside an object returns undefined
console.log(userDetails.os) // Gives us undefined

// Check if property is in an object, very useful when the property actually stores undefined
if ("age" in userDetails) {
    console.log("userDetails contain age");
}
