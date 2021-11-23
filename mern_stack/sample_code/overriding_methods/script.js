/*
Extending Classes
*/

// Use all the modern JS goodiness
"use strict";

// Class for normal employee
class Employee {
    constructor(name, department, baseSalary) {
        this.name = name;
        this.department = department;
        this.baseSalary = baseSalary;
    }

    // Calculate the total salary of the employee
    getSalary() {
        let hra = this.baseSalary * (10/100);
        let travelAllowance = this.baseSalary * (15/100);
        let tuitionAllowance = this.baseSalary * (20/100);
        return this.baseSalary + hra + travelAllowance + tuitionAllowance;
    }
}

// Class for interns
class Intern extends Employee {
    getSalary() {
        let tuitionAllowance = this.baseSalary * (25/100);
        return this.baseSalary + tuitionAllowance;
    }
}

// Create an intern object
let jiju = new Intern("Jiju Varghese", "Finance", 25000);

