// require('dotenv').config()
const mongoose = require("mongoose");

// This is confidential
// const MONGOURI = process.env.MONGO_KEY;
const MONGOURI = "mongodb+srv://arun496test:test496arun@dbtest.f3scq.mongodb.net/pepcowin?retryWrites=true&w=majority";

// Setting up mongoDB server
const setUpMongoDBServer = async () => {
    try {
        await mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connect to DB successful!!");
    } catch(e) {
        console.log(e);
    }
}

module.exports = setUpMongoDBServer;