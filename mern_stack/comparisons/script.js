/*
Doing comparisons in JS
*/

// Use all the modern JS goodiness
"use strict";

// Comparisons result in booleans
let greaterThanResult = 1 > 2; // This results in false

// Data types are automatically converted to numbers for comparison
let is3GreaterThan2 = '3' > 2; // Returns true, as 3 gets converted to Number

// As expected, true has the value 1 and false 0
let isFalseGreaterThanTrue = false > true; // Returns false

// Note that, the value of the String "0" will be > 0 when converted to Boolean
let valueOfZero = Boolean("0") == 0; // Returns false
