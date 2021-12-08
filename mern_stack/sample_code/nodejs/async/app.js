// The function where everything happens
let myFunction = async () => {
    // Create a promise which resolves in 1 second
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("It works!"), 1000)
    })

    // Pause function execution till above promise resolves
    let result = await promise; 
    console.log("The promise returned the value ->", result);
}

// Call myFunction
myFunction();

