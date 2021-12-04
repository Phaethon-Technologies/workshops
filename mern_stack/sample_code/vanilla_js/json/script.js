/*
JavaScript Object Notation
*/

// Use all the modern JS goodiness
"use strict";

// Create a sample object
let fruits = {
    "Apple": "Red",
    "Orange": "Orange",
    "Grape": "Blue",
}

// Create a JSON string from the object
let jsonString = JSON.stringify(fruits);

// Convert the JSON string back to an object
let anotherFruits = JSON.parse(jsonString);
