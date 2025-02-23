import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
const database = client.db("crudappfinal");
const users = database.collection("users");

export const connection = async () => {
    await client.connect();
};

export { users };

