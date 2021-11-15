/*
Trying out optional chaining
*/

// Use all the modern JS goodiness
"use strict";

// Constructor to create an object with some default values
function User() {
    this.name = "";
    this.isAdmin = false;
    this.department = "DevOps";
    this.address = {
        "house": "",
        "street": "",
        "city": "",
        "state": "",
        "pincode": "",
    }
}

// Create an object
let rajan = new User();

// Trying to access a non-existing nested value results in an error
// console.log(rajan.age.dob);

// Accessing the same using optional chaining
console.log(`Age of Rajan is ${rajan?.age?.dob}`);
