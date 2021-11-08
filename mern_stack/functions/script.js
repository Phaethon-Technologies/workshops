/*
Funcitons in JS
*/

// Use all the modern JS goodiness
"use strict";

// Function declaration
function myFirstFunction() {
    alert("This works!");
}

// Function call
myFirstFunction();

// Function with default arguments
function greetUser(userName = "friend") {
    console.log(`Hey there ${userName}! Good day to yeh :)`)
}

// Function to calcuate area of a circle
function getAreaCircle(radius) {
    return 3.14 * radius ** 2;
}

// Alternative syntax to declare a function (Function expression)
let getAreaRectangle = function(length, breadth) {
    return length * breadth;
}

// Copy function to another variable
let copyOfGetAreaRectangle = getAreaRectangle;
