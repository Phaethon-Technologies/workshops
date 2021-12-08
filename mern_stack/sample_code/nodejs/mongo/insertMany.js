// Import required libraires
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Create new MongoClient
const client = new MongoClient(uri);

// Set the DB and collection
const database = client.db("workshop");
const collection = database.collection("students");

// Create document list to insert
const docs = [
    { name: "Rocky", roll: 51, semester: "S7" },
    { name: "Tom", roll: 22, semester: "S6" },
    { name: "Mehfil", roll: 13, semester: "S6" },
    { name: "Santhosh", roll: 48, semester: "S6" },
]

async function mongoConnect(database, collection, docs) {
    try {
        // Connect to DB
        await client.connect();

        // Prevent additional documents from being inserted if one fails
        const options = { ordered: true };

        // Insert documents
        const result = await collection.insertMany(docs, options);
        console.log(result.insertedCount, "documents were inserted");
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect(database, collection, docs).catch(console.dir);

