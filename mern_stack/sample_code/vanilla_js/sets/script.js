/*
Working with sets in JavaScript
*/

// Use all the modern JS goodiness
"use strict";

// Declare a set
let myFirstSet = new Set();

// Add multiple values
myFirstSet.add("Apple");
myFirstSet.add("IBM");
myFirstSet.add("ARM");

// Print the set
console.log(myFirstSet);

// Try adding an existing value to set
myFirstSet.add("Apple");
console.log(myFirstSet); // No change compared with previous output

// Check if our set has a key
console.log(`${myFirstSet.has("Zilog")}`);

// Find the size of the set
console.log(`${myFirstSet.size}`)

// Clear the set
myFirstSet.clear();
