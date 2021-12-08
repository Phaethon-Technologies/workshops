// Import required libraires
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://127.0.0.1:27017";

// Create new MongoClient
const client = new MongoClient(uri);

async function mongoConnect() {
    try {
        // Connect to DB
        await client.connect();

        // Set the DB and collection
        const database = client.db("workshop");
        const mern_stack = database.collection("Git");

        // Create document to insert
        const doc = {
            title: "Git workshop",
            institution: "College of Engineering Cherthala",
            audience: "B.Tech, CS students"
        }

        // Insert the document
        const result = await mern_stack.insertOne(doc);
        console.log("Document inserted with _id -> ", result.insertedId);
    }
    finally {
        await client.close();
    }
}

// Connect to MongoDB and do stuff
mongoConnect().catch(console.dir);

