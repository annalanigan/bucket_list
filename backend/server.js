const express = require('express');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
server.use(cors());

server.use(parser.json());
server.use(parser.urlencoded({extended: true}));

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
      console.log("Showing all countries");
      res.json(result);
    })
  });

  server.delete("/api/countries", function(req, res){
    db.collection("countries").deleteMany(function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(204);
      console.log("Deleted all countries");
      res.json(result);
    });
  });

  server.post("/api/countries", function(req, res){
    console.log(req.body);
    db.collection("countries").save(req.body, function(err, result) {
      if(err) {
        console.log(err);
        res.status(500);
        res.send();
      }
      res.status(201);
      console.log("Created new country");
      res.json(result.ops[0]);
    });
  });

  server.listen(5000, function(){
    console.log("listening on port 5000");
  });

});
