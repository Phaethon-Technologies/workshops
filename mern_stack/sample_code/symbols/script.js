/*
Using symbols in objects
*/

// Use all the modern JS goodiness
"use strict";

// Declaring a symbol
let userid = Symbol("ID"); // ID is the description for the symbol

// Create an object with symbol
let userDetails = {
    [userid]: 1,
    "name": "Jobs, Steve",
    "employer": "Apple",
}

// Create a global symbol
let deptID = Symbol.for("deptID");

// Add the symbol to userDetails object
// The call accesses global registry and finding Symbol for "deptID" already exists, returns it
userDetails[Symbol.for("deptID")] = 1080;

// Reverse call to find out the title of a symbol
console.log(`The title of symbol deptID is ${Symbol.keyFor(deptID)}`);
