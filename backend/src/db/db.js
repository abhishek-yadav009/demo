// here we write the logic of how we gonna connect out db to server  but we call connection func to server.js
const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("MongoDB connected");
    })
    .catch((err)=>{
        console.log("MongoDB connection error");
    })
}

module.exports = connectDB;