const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://sanjinashrestha96_db_user:Mh2DoJmCgV12pgmr@cluster0.1xav39i.mongodb.net/"
const connectToDatabase = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    } catch (error) {
     console.log(`Database connection error is ${error}`)   
    }
}
module.exports = connectToDatabase;