/*
Promises in JS
*/

// Use all the modern JS goodiness
"use strict";

// Our first promise
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done"), 1000); 
});

