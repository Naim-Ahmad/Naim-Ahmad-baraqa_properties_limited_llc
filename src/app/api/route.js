import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://BARAQAPROPERTIES:UP4obkI3rpAnd5gK@cluster0.wkixfkf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

export const demosCollection = client
  .db("BaraqaProperties")
  .collection("demos");
export const usersCollection = client
  .db("BaraqaProperties")
  .collection("users");
