/*
Proof that JavaScript is a dynamically typed language
*/

// Use all the modern JS goodiness
"use strict";

// Let us declare a string
let message = "This is a message written in English";

// Let's make it a number
message = 512;

// Do you know that numbers can also hold floats?
let answerToLife = 4.2;

// A number can hold Inifinity
let sizeOfUniverse = Infinity;

// Infinity can also result from a division by zero
// Doing maths in JS is safe
let divisionByZero = 1 / 0;

// BigInt
let myBigInt = 1234567890123456789012345678901234567890n;

// Let's try some boolean values
let isSkodaReliable = false;
let isSkodaFunToDrive = true; // probably needs more emphasis

// The following is a null value
let guruMeditation = null;

// Here we have a similar concept called undefined
let capitalOfAlappuzha;

// One can also explicity assign undefined to a variable
// Prefer null over following method
let anUndefinedVariable = undefined;

// Let us check the data types of variables
alert(`isSkodaReliable is a ${typeof(isSkodaReliable)}`);
