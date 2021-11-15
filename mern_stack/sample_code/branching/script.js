/*
Let's do branching!
*/

// Use all the modern JS goodiness
"use strict";

// Single line if
let isLifeGood = true;
if (isLifeGood == true) alert("Life's good!");

// Multiline body for if
if (isLifeGood == true) {
    alert("Life's good!");
    alert("Do you know that the above statement is LG's trademark?");
}

// The else if statement
let userAge = prompt("How old are you?", 25);
if (userAge < 25) {
    alert("Still young eh?");
} else if (userAge > 25) {
    alert("Getting old, getting old :D");
} else {
    alert("You are 25 years of age!");
}

// Conditional operator
let userOS = prompt("Which OS do you use?", "Linux");
let userType = (userOS == "Linux") ? "Nerd" : "Consumer";

// Chaining conditional operator
userType = (userOS == "BSD") ? "Pro" :
    (userOS == "UNIX") ? "Old timer" :
    (userOS == "Android") ? "Mobile user" :
    "Hmm, I guess you are running Plan 9?";
