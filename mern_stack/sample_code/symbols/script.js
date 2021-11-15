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
