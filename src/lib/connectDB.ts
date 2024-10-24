import { MongoClient, Db, ServerApiVersion } from "mongodb";

let db: Db | null = null;

const connectDB = async (): Promise<Db | undefined> => {
  if (db) return db;

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("ChatVibe");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectDB;
