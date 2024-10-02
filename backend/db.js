// const mongoose = require('mongoose');

// // Use environment variable for the MongoDB URI in production
// const mongoURI = process.env.MONGODB_URI || "mongodb+srv://hemantarora028:crest%40123@cluster0.d9hx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const connectToMongo = async () => {
//     try {
//         await mongoose.connect(mongoURI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB successfully!");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//         process.exit(1); // Exit the process with failure
//     }
// };

// module.exports = connectToMongo;




const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://hemantarora028:crest%40123@cluster0.d9hx2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("connected to mongo successfully");
}

module.exports = connectToMongo;