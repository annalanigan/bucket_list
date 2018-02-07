const express = require('express');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
server.use(cors());

MongoClient.connect("mongodb://localhost:27017", function(err, client){
  if(err){
    console.log(err);
    return;
  }
  const db = client.db("bucket_list");

  server.get("/api/countries", function(req, res){
    db.collection("countries").find().toArray(function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(200);
      console.log(result);
      res.json(result);
    })
  });

  server.listen(5000, function(){
    console.log("listening on port 5000");
  });

});
