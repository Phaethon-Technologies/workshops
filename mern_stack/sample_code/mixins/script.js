/*
Using mixins in JavaScript
*/

// Use all the modern JS goodiness
"use strict";

// Mixin object
let utilsMixin = {
    getAge() {
        let currentDate = Date();
        return currentDate - this.dateOfBirth;
    }
}

// Create Person class 
class Person {
    constructor(name, dateOfBirth, gender) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }
}
// Copy the utilsMixin methods to Person class prototype
Object.assign(Person.prototype, utilsMixin);


