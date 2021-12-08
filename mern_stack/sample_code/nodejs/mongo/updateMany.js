// Import required libraires
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Create new MongoClient
const client = new MongoClient(uri);

// Set the DB and collection
const database = client.db("workshop");
const collection = database.collection("students");

// The filter to be passed to DB
const filter = { "semester": "S6" };

// Update roll number for the resultant document
const updateDoc = {
    $set: {
        semester: "S7",
    },
}

async function mongoConnect(collection, filter, options) {
    try {
        // Connect to DB
        await client.connect();

        // Setup cursor to find all matching documents
        const result = await collection.updateMany(filter, updateDoc);

        // Print update document count
        console.log(result.modifiedCount, "documents were updated");
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect(collection, filter).catch(console.dir);

