#!/usr/bin/env node

// Import the http module
const http = require("http");

// Set the hostname and port to serve on
const hostname = "127.0.0.1";
const port = 3000;

// Setup the server
const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("It Works!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

// Setup graceful exit
process.on("SIGTERM", () => {
    server.close(() => {
        console.log("Server has exited!");
    });
});

