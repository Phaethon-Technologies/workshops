/*
Introduction to objects
Developed for MERN stack workshop
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

// Walk over all properties in an object using the 'for in' loop
function walkThroughObject(passedObject) {
    for (key in passedObject) {
        console.log(`${key} -> ${passedObject[key]}`);
    }
}

// Copying userDetails to another variable does not create a new copy of the object
let alternativeUserDetails = userDetails;
alternativeUserDetails["employer"] = "ACME";
console.log(userDetails.employer) // The employer in userDetails is now ACME

// Create another object
let hobbyDetails = {
    "hobby": "Chess",
    "passion": "Programming",
}

// Create a new object merging two existing objects and assign it to ritchieDetails
let ritchieDetails = Object.assign({}, userDetails, hobbyDetails);

// Looping over all properties in an object
for (let prop in ritchieDetails) {
    console.log(`${prop} -> ${ritchieDetails[prop]}`);
}

// Creating copy of an object
let anotherRitchieObject = Object.assign({}, ritchieDetails);

// Create a method inside anotherRitchieObject and use this
anotherRitchieObject.getName = function() {
    return this.name;
}

// Method creation shorthand while declaring an object
let myDistrict = {
    "name": "Alappuzha",
    "state": "Kerala",
    getName() {
        return this.name;
    }
}

// Getter and Setter example
let salary = {
    set amount(value) {
        this.basic = (50/100) * value;
        this.hra = (25/100) * value;
        this.total = value;
    },
    get maxCredit() {
        return this.basic * 4;
    }
}
