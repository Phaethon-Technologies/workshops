/*
Using mixins in JavaScript
*/

// Use all the modern JS goodiness
"use strict";

// Mixin object
let utilsMixin = {
    getAge() {
        let currentDate = new Date();
        let diff = currentDate - this.dateOfBirth;
        return diff;
    }
}

// Create Person class 
class Person {
    constructor(name, dateOfBirth, gender) {
        this.name = name;
        this.dateOfBirth = new Date(dateOfBirth);
        this.gender = gender;
    }
}
// Copy the utilsMixin methods to Person class prototype
Object.assign(Person.prototype, utilsMixin);

// Create a person object
let ajay = new Person("Ajay", "1998-11-23", "Male");

