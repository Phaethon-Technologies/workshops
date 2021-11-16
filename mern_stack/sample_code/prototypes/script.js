/*
JavaScript Object Notation
*/

// Use all the modern JS goodiness
"use strict";

// The top level object
let animal = {
    "alive": true,
}

let wolf = {
    "legs": 4,
    "can_move": true,
    "food_type": "carnivorous",
    __proto__: animal,
}

let dog = {
    "cute": true,
    "friendly": true,
    __proto__: wolf,
}

// Retrieving the number of legs a dog have (retrieved from wolf)
console.log(`A dog has ${dog.legs} legs`)
