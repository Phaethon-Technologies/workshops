/*
Let's try out JavaScript's logical operators
*/

// Use all the modern JS goodiness
"use strict";

// Using the logical OR operator (||)
let orValue = true || false // Returns true

// Using the OR operator in an if condition
let age = 30;
if (age < 18 || age > 60) {
    alert(`You are not eligible as you are ${age} years old`);
}

// OR would return the first truthy value without conversion
let firstName = "";
let lastName = "Kurian";
let givenName = firstName || lastName || null; // Stores Kurian as givenName

// Nullish coalescing operator returns the first defined value
let undefinedUser;
let givenUser = undefinedUser || "Anonymous";
