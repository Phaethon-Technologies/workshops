/*
Overriding class methods
*/

// Use all the modern JS goodiness
"use strict";

// Class with static method 
class Keyboard {
    static checkThis() {
        console.log(this === Keyboard);
    }
} 

// Class without static method
class Mouse {
    checkThis() {
        console.log(this === Mouse);
    }
}

