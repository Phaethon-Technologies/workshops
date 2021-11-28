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

// Loop over the children of body 
console.log("The following are the elements inside <body> tag");
for (let child of document.body.childNodes) {
    console.log(child);
}

// Print the first child of document, ie <HTML>
console.log(`The first child of document is ${document.firstChild.name}`);

// Print the tag for next sibling of <head>
console.log(`The tag for next sibling of <head> is ${document.head.nextSibling}`);

