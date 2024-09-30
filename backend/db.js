const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hemantarora028:crest%40123@cluster0.d9hx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo successfully");
}

module.exports = connectToMongo;