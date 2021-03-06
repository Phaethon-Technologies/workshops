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

// An undefined string becomes NaN when converting to Number
let undefinedVariable;
alert(`The value of undefinedVariable is ${Number(undefinedVariable)}`);

// A string with alphabets return NaN when converting to Number
let invalidNumber = "800dx";
alert(`the value of invalidNumber is ${Number(invalidNumber)}`);

// Zero (0) when converted to Boolean becomes false
let valueOfZero = Boolean(0);

// Null when converted to Boolean becomes false
let valueofNull = Boolean(null);

// A non-empty string when converted to Boolean becomes true
let valueofString = Boolean(" ");

// The string "0" gets becomes true when using Boolean conversion
let valueOfStringZero = Boolean("0");
