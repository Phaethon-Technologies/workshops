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
failedPromise.catch(error => alert(error));

// Below code fails, as we end up calling the alert function,
// without passing it to the Promise.then() method
// failedPromise.then(alert(value), alert(value));

// A simple Christmas checker
let xmasPromise = new Promise(function(resolve, reject) {
    // Get date and month
    let dateObj = new Date();
    if (dateObj.getDate() == 25 && dateObj.getMonth() == 11) {
        resolve("It's Christmas!");
    }
    reject("It's not Santa's time yet");
});

// Let's handle xmasPromise 
// The finally clause executes no matter what happens to a promise
xmasPromise.then(
    successMessage => promiseLogger(successMessage),
    failureMessage => promiseLogger(failureMessage)
).finally(
    () => promiseLogger("End of the road!")
);

// Log promise results to the console
function promiseLogger(message) {
    console.log(message);
}

