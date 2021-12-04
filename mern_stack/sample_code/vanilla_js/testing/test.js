/*
Let us test the pow() function
*/

// Use all the modern JS goodiness
"use strict";

// Test exponentiation (first)
describe("pow", function() {
    it("raises a value to nth power", function() {
        assert.equal(pow(2, 3), 8);
    });
})

// Test exponentiation (second)
describe("pow", function() {
    it("raises a value to nth power", function() {
        assert.equal(pow(25, 3), 625);
    });
});


