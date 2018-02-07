const express = require('express');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const parser = require('body-parser');
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
server.use(cors());
