/*
Overriding class methods
*/

// Use all the modern JS goodiness
"use strict";

// Class for normal employee
class Employee {
    constructor(name, department, baseSalary) {
        this.name = name;
        this.department = department;
        this.baseSalary = baseSalary;
        this.intern = false;
    }

    // Calculate the total salary of the employee
    get salary() {
        let hra = this.baseSalary * (10/100);
        let travelAllowance = this.baseSalary * (15/100);
        let tuitionAllowance = this.baseSalary * (20/100);
        return this.baseSalary + hra + travelAllowance + tuitionAllowance;
    }
}

// Class for interns
class Intern extends Employee {
    constructor(name, school, department, baseSalary) {
        super();
        this.name = name;
        this.school = school;
        this.department = department;
        this.baseSalary = baseSalary;
        this.intern = true;
    }

    // Salary getter for intern :)
    get salary() {
        let tuitionAllowance = this.baseSalary * (25/100);
        return this.baseSalary + tuitionAllowance;
    }
}

// Create an intern object
let jiju = new Intern("Jiju Varghese", "KECCS", "Finance", 25000);

