/*
Exploring more data types
*/

// Use all the modern JS goodiness
"use strict";

// Declaring an array
let fruits = ["Apple", "Orange", "Gooseberry", "Strawberry",]

// Access the second element from the array
console.log(`My favourite fruit is ${fruits[1]}`);

// Modify an existing element
fruits[3] = "Mango";

// Add an element to the end of the array
fruits.push("Jackfruit");

// Remove last element from array
console.log(`Removing ${fruits.pop()}`);

// Add a new element to the beginning of the array
fruits.unshift("Blackberry");

// Remove the first element in the array (shift the array forward by one item)
console.log(`Removing ${fruits.shift()}`);

// Adding multiple elements at once
fruits.push("Grapes", "Watermelon");


