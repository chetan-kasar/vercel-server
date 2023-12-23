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

app.use('/add', async (req, res) => {
  console.log("add is working");
  const uri = "mongodb+srv://kasarschetan1122:yuv3XpgeovmKFRFU@cluster07.ma9cvqv.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  const database = client.db("mydb3");
  const mycollection = database.collection("mycollection");
  const result = await mycollection.insertOne({name:"Hitman"});
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log("Server running on");
});
