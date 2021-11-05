/*
Trying out math operators
*/

// Use all the modern JS goodiness
"use strict";

// Example for a unary operator
let negativeNumber = -5;

// Example for binary operator
let difference = 5 - 3;

// Find the reminder when dividing 20 by 3
let remainder = 20 % 3;

// Raise 5 to the power 3
let fivePower = 5 ** 3;

// Stiching two strings together (concatenation)
let firstString = "Hello ";
let secondString = "World!";
let stitchedString = firstString + secondString;

// Stitching a string and a number converts the number to a string
let anotherString = "The answer to life is ";
let justANumber = 42;
let stitch = anotherString + justANumber;

// Concatenation gotchas!
let mySum = "1" + 1 + 1 + "3"; // Here the answer will be 1113
let anotherSum = 1 + 2 + "3"; // Here the answer will be 33
let newSum = "1" + 2 + 3; // Here the answer will be 123

// The unary + operator can be used as an alternative to Number() method
let justAnotherString = "5";
let justAnotherNumber = +justAnotherString; // Will convert justAnotherString to a number

// Unary + can be used to convert strings on the fly for summing them
let theNumberNine = "9";
let theNumberSeven = "7";
let sumOfNumbers = +theNumberNine + +theNumberSeven; // This will result in 16

// The assignment operator is interesting, it returns value
let a = 1;
let b = 3;
// a = b + 2 results in 5 and it returns the value which is then summed with 3
let c = 3 + (a = b + 2); // This results in 8

// Chaining assignments, d and e end up having the value 4
let d = e = 4 + 4;

// Modifying in-place, storing the sum in the same variable
// This can be used with other operators as well
let salary = 5000;
salary += 2000;
