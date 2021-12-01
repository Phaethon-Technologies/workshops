/*
Promises in JS
*/

// Use all the modern JS goodiness
"use strict";

// A promise which completes succesfuly 
let fulfilledPromise = new Promise(function(resolve, reject) {
    let currentTime = Date();
    setTimeout(() => resolve(currentTime), 1000); // "completed" can be any value 
});

// Handle fulfilledPromise 
fulfilledPromise.then(
    result => alert(result),
    error => alert(error)
)

// A promise which fails
let failedPromise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("This promise failed")), 3000);
});

// Handle failedPromise
failedPromise.then(
    result => alert(result),
    error => alert(error)
)

