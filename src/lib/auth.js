import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


try {
  await client.connect();
  console.log("MongoDB Connected");
} catch (error) {
  console.log(error);
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("wanderlast");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
