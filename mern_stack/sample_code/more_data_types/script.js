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

// Display the length of the array
console.log(`The length of our array is ${fruits.length}`);

// Looping over the array in the traditional way
console.log("Looping over the array in the traditional way...");
for (let i = 0; i < fruits.length; ++i) {
    console.log(`fruits[${i}] -> ${fruits[i]}`);
}

// Alternative syntax for looping over array
console.log("We have the following fruits available...");
for (let fruit of fruits) {
    console.log(fruit);
}
