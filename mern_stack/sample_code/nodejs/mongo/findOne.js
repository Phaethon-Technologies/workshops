// Import required libraires
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Create new MongoClient
const client = new MongoClient(uri);

// Set the DB and collection
const database = client.db("workshop");
const collection = database.collection("students");

// The query to be passed to DB
const query = { "semester": "S6" };

// Options to use
const options = {
    sort: { "roll": -1 },
};

async function mongoConnect(collection, query, options) {
    try {
        // Connect to DB
        await client.connect();

        // Insert documents
        const result = await collection.findOne(query, options);
        console.log(result);
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect(collection, query, options).catch(console.dir);

