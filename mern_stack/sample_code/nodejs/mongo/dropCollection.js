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

async function mongoConnect(collection) {
    try {
        // Connect to DB
        await client.connect();

        const result = await collection.drop();
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect(collection, filter).catch(console.dir);

