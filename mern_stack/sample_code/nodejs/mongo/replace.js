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
const filter = { "name": "Tom" };

const replacement = {
    "name": "Sanjana",
    "roll": 67,
    "semester": "S6",
}

async function mongoConnect(collection, filter, replacement) {
    try {
        // Connect to DB
        await client.connect();

        const result = await collection.replaceOne(filter, replacement);

        // Print updated document count
        console.log(result.modifiedCount, "document(s) were updated");
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect(collection, filter, replacement).catch(console.dir);

