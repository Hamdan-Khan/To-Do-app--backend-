const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.DATABASE_URL;

const connection = () =>
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "TodoApp",
    })
    .then(() => {
      console.log("Connected to the Database.");
    })
    .catch((err) => {
      console.error(err);
    });

module.exports = connection;
