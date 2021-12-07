// Import required libraries
import fetch from "node-fetch";

// Provide status
const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

// Extract JSON data from the response 
const json = (response) => {
    return response.json();
}

// Try fetching a file
fetch("https://reqres.in/api/users?page=2")
    .then(status)
    .then(json)
    .then((data) => {
        console.log("Request succeeded with JSON response", data);
    })
    .catch(error => {
        console.log("Request failed", error);
    })

