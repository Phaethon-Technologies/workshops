/*
Manipulating tables using JavaScript and DOM
*/

// Use all the modern JS goodiness
"use strict";

// Accessing the table with the id myTable 
console.log("Here are myTable's rows");
// First method
console.log(myTable.rows);
// Alternate way of accessing rows
console.log(myTable.tBodies[0].rows);

// Change the background colour of first row to Brown 
myTable.rows[0].bgColor = "Brown";

// Access the zeroth row's zeroth element
console.log(`Zeroth row's zeroth element is`);
console.log(myTable.rows[0].cells[1]);

// The index of a cell can be accessed using cellIndex property
console.log(myTable.rows[0].cells[1].cellIndex);

