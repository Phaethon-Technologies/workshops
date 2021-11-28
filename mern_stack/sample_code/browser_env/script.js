/*
Working with JavaScript in browser environment
*/

// Use all the modern JS goodiness
"use strict";

// Set background colour as black
document.body.style.background = "black";
// Change the background colour back to white
setTimeout(() => document.body.style.background = "", 1000);

// Get the userAgent
console.log(`Your userAgent is -> ${navigator.userAgent}`);

// Get the platform
console.log(`You are running ${navigator.platform}`);

// The location object
console.log(`You are currently accessing ${location.href}`);

// Loop over the children of document 
for (let child of document.childNodes) {
    console.log(child);
}

