/*
Working with maps in JavaScript
*/

// Use all the modern JS goodiness
"use strict";

// Create a map
let myFirstMap = new Map();

// Fill map with data
myFirstMap.set("type", "Reverse Lookup");
myFirstMap.set(100, "Police");
myFirstMap.set(101, "Ambulance");
myFirstMap.set(true, "Truth value");

// Return a value from the map
console.log(`100 is the number of ${myFirstMap.get(100)}`);

// Check if a key exists
console.log(`${myFirstMap.has(911)}`);

// Return the size of the map
console.log(`The map currently has ${myFirstMap.size} elements`);

// Delete an entry from the map
myFirstMap.delete(true);

// Clear all the key value pairs from the map
myFirstMap.clear();
