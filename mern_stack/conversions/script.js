/*
Data type conversions
*/

// Use all the modern JS goodiness
"use strict";

// Let us define some string numbers
let firstNumber = "15";
let secondNumber = "6";

// JS is so advanced, it allows us to multiply strings :D
alert(`The product of ${firstNumber} and ${secondNumber} is ${firstNumber * secondNumber}`);

// Explicitly converting a string to number
let myStringNumber = 128;
let convertedNumber = Number(myStringNumber);

// An undefined variable becomes NaN
let undefinedVariable;
alert(`The value of undefinedVariable is ${Number(undefinedVariable)}`);
