const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kasarschetan1122:yuv3XpgeovmKFRFU@cluster07.ma9cvqv.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
const app = express();
const cors = require('cors');
app.use(bodyParser.json());

app.use(cors({
  origin: ['https://finalfk.vercel.app'],
  methods: ['GET','POST'],
  credentials: true 
}));

app.use("/home",(req,res)=>{
  res.send("Home is working");
});

app.use("/add",async(req, res) => {
  try {
        // Connect to the Atlas cluster
         await client.connect();
         const db = client.db(dbName);
         // Reference the "people" collection in the specified database
         const col = db.collection("people");
         // Create a new document                                                                                                                                           
         let personDocument = {
             "name": { "first": "Alan", "last": "Turing" },
             "birth": new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
             "death": new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
             "contribs": [ "Turing machine", "Turing test", "Turingery" ],
             "views": 1250000
         }
         // Insert the document into the specified collection        
         const p = await col.insertOne(personDocument);
         // Find and return the document
         const filter = { "name.last": "Turing" };
         const document = await col.findOne(filter);
         console.log("Document found:\n" + JSON.stringify(document));
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log("Server running on");
});
