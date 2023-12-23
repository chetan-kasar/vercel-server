const express = require('express');
const bodyParser = require('body-parser');
//const { MongoClient } = require('mongodb');
//const uri = "mongodb+srv://kasarschetan1122:D7Ybtd5WfHapo4tV@cluster2.3fczggr.mongodb.net/?retryWrites=true&w=majority";
//const client = new MongoClient(uri);
const app = express();
const cors = require('cors');
app.use(cors(
  {
    origin: 'https://finalfk-frontend.vercel.app',
  }
));
app.use(bodyParser.json());

app.use("/",(req,res)=>{
  res.json({message:"hiii"});
});

app.use("/add",(req, res) => {
  res.json({message:"received"});
  //const database = client.db("mydb3");
  //const mycollection = database.collection("mycollection");
  //const result = await mycollection.insertOne(req.body.userData);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log("Server running on");
});
