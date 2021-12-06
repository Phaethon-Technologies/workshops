// Import required libraries
const fs = require("fs");

// Read a file and return error, if it fails
const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        })
    })
};

// Read a file
getFile(
    "/etc/passwd"
).then(
    (data) => console.log(data)
).catch(
    (err) => console.error(err)
);

