/*
Working with classes
*/

// Use all the modern JS goodiness
"use strict";

// Let us create a class
class Computer {
    // Class fields
    input = ["keyboard", "mouse"];
    output = ["monitor", "speaker"];
    io = ["serial", "USB", "parallel"];
    // Constructor
    constructor(hostname) {
        this.hostname = hostname;
        this.architecture = "ARM";
    }
    // Normal method
    getHostname() {
        return this.hostname;
    }
    // Another method
    setOperatingSystem(os) {
        this.OperatingSystem = os;
    }
    // An unbounded method
    logHostname() {
        console.log(this.hostname);
    }
    // Method bound to the object
    anotherLogHostname = () => {
        console.log(this.hostname);
    }
    // Our first setter
    set isServer(server) {
        self.isServer = server;
    }
    // Our first getter method
    get isServer() {
        if (!isServer) {
            return "The machine is not a server";
        } else {
            return "The serves a lot of people";
        }
    }
}

// Declare an object using Computer class;
let myComputer = new Computer("ThinkPad");

// Let us create a base class
class Monitor {
    constructor() {
        this.outputDevice = true;
    }
}

// We will now create a class for LCD monitor
class LcdMonitor extends Monitor {
    constructor() {
        super();
        this.displayType = "LCD";
    }
}

// Create an object of LcdMonitor
let samsungMonitor = new LcdMonitor();

// Check whether samsungMonitor is an instance of LcdMonitor
console.log(`samsungMonitor is an object of LcdMontior -> ${samsungMonitor instanceof LcdMonitor}`);

