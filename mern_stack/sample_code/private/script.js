/*
Protected and private properties
*/

// Use all the modern JS goodiness
"use strict";

// Class with a private number, green, blue values 
class Interrupt {
    set number(value) {
        this._number = this._cleanedValue(value);
    }
    get number() {
        return this._number;
    }

    // Clean values
    _cleanedValue(value) {
        // Fix out of range values 
        if (value > 255) {
            return 255;
        } else if (value < 0) {
            return 0;
        }
        return value;
    }
}

// Create an object of Interrupt 
let nonMaskable = new Interrupt();

