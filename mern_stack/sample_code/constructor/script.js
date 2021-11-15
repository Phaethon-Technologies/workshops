/*
Constructor functions
*/

// Use all the modern JS goodiness
"use strict";

// Define a constructor function
function CreateAutomobile(name, fuel, manufacturer, bodyStyle) {
    this.name = name,
    this.fuel = fuel,
    this.manufacturer = manufacturer,
    this.bodyStyle = bodyStyle,
    this.getName = () => this.name;
    this.getFuel = () => this.fuel;
    this.getBodyStyle = () => this.bodyStyle;
}

// Create two automobile objects with constructor
let zs = new CreateAutomobile("ZS", "electric", "MG", "CrossOver");
let omni = new CreateAutomobile("Omni", "petrol", "Maruti", "MiniVan");
