

import { MongoClient, ServerApiVersion, Db } from "mongodb";

let db: Db | null = null; // Declare db with type `Db` or `null`

const connectDB = async (): Promise<Db | null> => {
  if (db) return db; // Return the existing database connection

  try {
    const uri: string | undefined = process.env.MONGODB_URL; // Add your MongoDB connection string
    if (!uri) {
      throw new Error("Please define the MONGODB_URI environment variable");
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await client.connect(); // Connect to the MongoDB server
    db = client.db("ChatVibe"); // Select the database
    return db; // Return the database connection
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return null; // Return null on error
  }
};

export default connectDB;
