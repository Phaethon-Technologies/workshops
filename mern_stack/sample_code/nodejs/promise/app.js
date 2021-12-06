// A simple Christmas checker
let xmasPromise = new Promise(function(resolve, reject) {
    // Get date and month
    let dateObj = new Date();
    if (dateObj.getDate() == 25 && dateObj.getMonth() == 11) {
        resolve("It's Christmas!");
    }
    reject("It's not Santa's time yet");
});

// The finally clause executes no matter what happens to a promise
xmasPromise.then(
    successMessage => promiseLogger(successMessage),
).finally(
    () => promiseLogger(`Current Time -> ${Date()}`)
).catch(
    failureMessage => promiseLogger(failureMessage)
);

// Log promise results to the console
function promiseLogger(message) {
    console.log(message);
}

