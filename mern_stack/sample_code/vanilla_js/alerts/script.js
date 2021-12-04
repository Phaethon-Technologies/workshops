/*
Let us use prompt, alert and confirm
*/

// Use all the modern JS goodiness
"use strict";

// Get user's age
let age = prompt("How old are you?", 25);

// A simple alert
alert(`You are ${age} years old!`);

// Confirm the age
let isAgeAccurate = confirm(`Are you ${age} years old?`);

// Show the results
alert(`You selected ${isAgeAccurate}`);
