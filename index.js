const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kasarschetan1122:CUhAtAZZCzo4eg7g@cluster0.6xbessh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
"Access-Control-Allow-Origin":"http://localhost:3000";

app.use(cors({
  origin: "*",
  methods: ['GET','POST'],
  credentials: true 
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});


app.post('/add', async (req, res) => {
  const database = client.db("mydb3");
  const mycollection = database.collection("mycollection2");
  const result = await mycollection.insertOne(req.body.usernane);
  res.send("add is working");
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log("Server running on");
});
