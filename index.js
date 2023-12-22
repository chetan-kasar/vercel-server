const express = require("express");
const app = express();

app.use("/",(req, res)=>{
  res.json({message:"Hello"});
});

app.listen(9000, () => {
    console.log(`Server running`);
  });
