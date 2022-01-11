let myPromise = new Promise(function(resolve, reject) {
    let currentTime = Date();
    if (currentTime) {
        resolve(currentTime);
    } else {
        reject(currentTime);
    }
});

// Handle myPromise 
myPromise.then(
    result => console.log("SUCCESS>", result),
    error => console.log("FAILURE>", error)
)

