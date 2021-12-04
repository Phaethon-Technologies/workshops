// Get the time after 10 seconds
const id = setTimeout(() => console.log(`${Date()}`), 10000);
console.log(`Timer ID is ${id}`);

// Delete the timer
clearTimeout(id);

