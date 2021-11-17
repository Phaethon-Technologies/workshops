/*
Working with classes
*/

// Use all the modern JS goodiness
"use strict";

// Let us create a class
class computer {

    constructor(hostname) {
        this.hostname = hostname;
        this.isServer = false;
        this.architecture = "ARM";
    }
    
    getHostname() {
        return this.hostname;
    }
    
    setOperatingSystem(os) {
        this.OperatingSystem = os;
    }

}
