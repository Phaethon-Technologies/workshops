/*
Doing comparisons in JS
*/

// Use all the modern JS goodiness
"use strict";

// Comparisons result in booleans
let greaterThanResult = 1 > 2; // This results in false

// Data types are automatically converted to numbers for comparison
let is3GreaterThan2 = '3' > 2; // Returns true, as 3 gets converted to Number
let equalityCheck = '5' == 5; // Returns true

// As expected, true has the value 1 and false 0
let isFalseGreaterThanTrue = false > true; // Returns false

// Note that, the value of the non-empty String "0" will be > 0 when converted to Boolean
let valueOfZero = Boolean("0") == 0; // Returns false

// The strict equality operator tries to compare values without converting them
equalityCheck = '5' === 5; // Returns false

// There is also a strict inequality operator
equalityCheck = '5' !== 5; // Returns true

// null and undefined are equivalent in the eyes of equivalent operator
equalityCheck = null == undefined; // Results in true

// For the strict equality checker, they are different as they belong to separate types
equalityCheck = null === undefined; // Returns false

// The equality operator for the following expression returns false
// Only null and undefined are equivalent to each other
equalityCheck = null == 0 // Returns false

// The rest of the comparison operators work by converting null to 0
equalityCheck = null >= 0 // Returns true
equalityCheck = null <= 0 // Returns true

