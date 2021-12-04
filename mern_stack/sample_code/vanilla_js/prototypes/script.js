/*
Using prototypes to extend objects
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

// Setting prototypes in constructor functions
function Beast(name) {
    this.name = name;
    this.legs = 4;
}
Beast.prototype = animal; // Using this.prototype inside function definition does not work

// Let us create an object using the constructor function
let cow = new Beast("Cow");

// We can use constructor of an existiffffallo")

// Modern Object.create() method to define object with prototype
let leopard = Object.create(animal);
leopard.name = "Leopard";

// Get the prototype of an object
let prototypeOfLeopard = Object.getPrototypeOf(leopard);
