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

// Get day of the week
console.log(christmas2006.getDay());

// get UNIX timestamp
console.log(christmas2006.getTime());

// Alter existing values inside a date object
let randomDate = new Date(); // randomDate currently holds the current date/time
randomDate.setFullYear(1975); // Setting the year to 1975
console.log(randomDate);

// Get UNIX timestamps of the current time directly by calling Date.now() method
// Get another timestamp after some time and subtract them to get time difference
let timeStamp1 = Date.now(); // Returns milliseconds elapsed since UNIX epoch
