const mongoose = require("mongoose");

const URI =
  "mongodb+srv://hamdan:hamdan123@mern-cluster.qk338of.mongodb.net/test";

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
    .catch((err) => console.error(err));

module.exports = connection;
