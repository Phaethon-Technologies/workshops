/*
Using JavaScript in browser environment
*/

// Use all the modern JS goodiness
"use strict";

// Set background colour as black
document.body.style.background = "black";
// Change the background colour back to white
setTimeout(() => document.body.style.background = "", 1000);

// Get the userAgent
alert(`Your userAgent is -> ${navigator.userAgent}`);

// Get the platform
alert(`You are running ${navigator.platform}`);

// The location object
alert(`You are currently accessing ${location.href}`);

