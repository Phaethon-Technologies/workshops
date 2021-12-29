// Get the time asynchronously
const getTime = () => {
  return new Promise((resolve, reject) => {
    let currentTime = Date();
    if (currentTime) {
      resolve(currentTime);
      return;
    }
    reject(currentTime);
  });
}

getTime()
.then(
  (output) => console.log("Output>", output)
)
.catch(
  (error) => console.error("Error>", error)
);

