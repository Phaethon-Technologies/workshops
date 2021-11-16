/*
Date and time in JavaScript
*/

// Use all the modern JS goodiness
"use strict";

// Get the current date and time
let currentTime = new Date();

// Create a Date object with time equal to 1000 msecs after UNIX epoch
let unixEpochTime = new Date(1000);

// Set 2006-12-25, midnight as the time
let christmas2006 = new Date("2006-12-25");

// Alternative syntax to to set the time as 2012's christmas midnight
let christmas2012 = new Date(2012, 12, 25);

// Get year from a date object
console.log(christmas2012.getFullYear());

// Get month from a date object
console.log(christmas2006.getMonth());

// Hours, minutes, seconds and milliseconds can be similarly retrieved
console.log(`${christmas2006.getHours()}:${christmas2006.getMinutes()}`);
