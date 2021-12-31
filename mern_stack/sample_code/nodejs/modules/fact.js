// Query https://uselessfacts.jsph.pl for facts 

// Import required libraries
const https = require("https");

// Export stuff
exports.getFact = getFact;

function getFact() {
  const options = {
    hostname: "https://uselessfacts.jsph.pl",
    port: 80,
    path: "/random.json?language=en",
    method: "GET",
  }

  const request = https.request(options, (response) => {
    console.log(response.statusCode);
  });
  
  request.on("error", error => {
    console.error(error);
  });

  request.end();
}

