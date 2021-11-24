/*
Static methods in classes
*/

// Use all the modern JS goodiness
"use strict";

// Class with static method 
class Keyboard {
    constructor(identifier) {
        this.identifier = identifier;
    }
    static getName() {
        return this.identifier;
    }
    static checkThis() {
        console.log(this === Keyboard);
    }
} 

// Class without static method
class Mouse {
    constructor(identifier) {
        this.identifier = identifier;
    }
    getName() {
        return this.identifier;
    }
    checkThis() {
        console.log(this === Mouse);
    }
}

// Create objects
let logitech = new Mouse("Wireless");
let microsoft = new Keyboard("PS/2");

// This results in an error
// microsoft.getName();

// But this works (static methods can only be invoked using class identifier)
// One important thing to note here is that static methods cannot access object values
Keyboard.getName();

