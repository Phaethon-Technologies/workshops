// Query http://open-notify.org to get ISS information 

// Import required libraries
const http = require("http");

// Export stuff
exports.getStationLocation = getStationLocation;

function getStationLocation() {
  const options = {
    hostname: "http://open-notify.org",
    port: 80,
    path: "/Open-Notify-API/ISS-Location-Now",
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

