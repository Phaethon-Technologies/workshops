// Import required libraires
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Create new MongoClient
const client = new MongoClient(uri);

async function mongoConnect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB server");
    }
    finally {
        await client.close();
    }
}

mongoConnect().catch(console.dir);

