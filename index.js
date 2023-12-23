const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://kasarschetan1122:NCRXzlI79epw381J@cluster3.oadis6o.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const app = express();
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.use("/home",(req,res)=>{
  res.send("Home is working");
});

app.post("/add",(req, res) => {
  res.send("add is working");
  //const database = client.db("mydb3");
  //const mycollection = database.collection("mycollection");
  //const result = await mycollection.insertOne(req.body.userData);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log("Server running on");
});
