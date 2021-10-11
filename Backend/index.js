const express = require('express');
const bodyParser = require('body-parser');
const setUpMongoDBServer = require("./db.js");
const userAuthRoute = require("./Routes/userAuth.js");
const getVaccinationDataRoute = require("./Routes/vaccinationData.js");

// Setting up Mongo DB server
setUpMongoDBServer();

const app = express();
const port = process.env.PORT || 5000;

// app.use(express.urlencoded({
//     extended: true
// }));
app.use(express.json());


// Middleware for user auth [Login and Signup]
app.use("/user", userAuthRoute);