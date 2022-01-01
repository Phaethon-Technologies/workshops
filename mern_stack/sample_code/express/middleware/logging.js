// Trying out the Morgan middleware

// Import required libraries
const express = require("express");
const logger = require("morgan");

// Setup webapp object and the port to listen on
const app = express();
const port = 3000;

// Tell Express to use Morgan in dev mode
app.use(logger("dev"));

// Show greeting when user visits web app's root 
app.get("/", (request, response) => {
  response.send("Hello World!");
});

// Start listening for connections
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

