// console.log('Hello, World!');

//Today we will study about MVC (Model View Controller) clean architecture and publish to github

//At first, we will learn about userside...!

const express = require("express");
const connectToDatabase = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

connectToDatabase();
const PORT = process.env.PORT ;


app.listen(PORT, ()=> {
  console.log(`Server is running on PORT ${PORT}`)
});

app.get("/", (req, res) => {
  res.send("Sanjina Shrestha!")
});

// console.log("Hello, World!");