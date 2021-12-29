// Import required modules
const path = require("path");
const fs = require("fs");
const { MongoClient } = require("mongodb");

// Find all files inside a directory
function listFiles(dirPath) {
  fs.readdir(dirPath, (error, files) => {
    if (error) {
      console.log("Unable to scan directory", dirPath);
    }
    files.forEach((file) => {
      console.log(file); // Do stuff
    });
  });
}

function listImages(files) {
  files.forEach((file) => {


listFiles("/home/aswin");

