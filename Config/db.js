const mongoose = require("mongoose");
const mongourl = "mongodb://localhost:27017/MernEcommerce";

mongoose.connect(mongourl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to mongodb server!");
})
db.on('error', () => {
    console.log('mongodb connection error', err)
})
db.on('disconnected', () => {
    console.log("Mondodb Disconnected!");
})

module.exports = db;