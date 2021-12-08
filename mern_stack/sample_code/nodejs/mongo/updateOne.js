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
const filter = { "name": "Mehfil" };

// Update roll number for the resultant document
const updateDoc = {
    $set: {
        roll: 33,
    },
}

async function mongoConnect(collection, filter, options) {
    try {
        // Connect to DB
        await client.connect();

        // Setup cursor to find all matching documents
        const result = await collection.updateOne(filter, updateDoc);

        // Print update document count
        console.log(result.matchedCount, "documents were update");
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect(collection, filter).catch(console.dir);

