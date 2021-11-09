/*
Funcitons in JS
*/

// Use all the modern JS goodiness
"use strict";

// Declare an object
let userDetails = {
    "name": "Dennis M Ritchie",
    "employer": "AT&T"
};

// Accessing object values using dot notation
function logUserDetails(userDetails) {
    console.log(`Name -> ${userDetails.name}`);
    console.log(`Employer -> ${userDetails.employer}`);
}
