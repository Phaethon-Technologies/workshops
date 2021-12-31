// Query http://uselessfacts.jsph.pl for facts 

// Import required libraries
const http = require("http");

// Export stuff
exports.getCheck = getCheck;

function getCheck() {
  const options = {
    hostname: "http://localhost",
    port: 80,
    path: "/",
    method: "GET",
  }

  const request = http.request(options, (response) => {
    console.log(response.statusCode);
  });
  
  request.on("error", error => {
    console.error(error);
  });

  request.end();
}

