const connection = require("./db");
const express = require("express");
const cors = require("cors");
const Task = require("./Schemas/Tasks");

const port = 2020;

const app = express();

app.use(cors());

connection();

app.use(express.json());

// Creating a task
app.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = new Task({
      title: title,
      description: description,
    });
    const saved = await task.save();
    res.status(200).send(saved);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Getting all the tasks
app.get("/", async (req, res) => {
  const tasks = await Task.find({}).lean();
  res.status(200).json(tasks);
});

// Deleting a specific task
app.delete("/", async (req, res) => {
  const id = req.body.key;
  const task = await Task.findOneAndDelete({ _id: id });
  res.status(200).send(task);
});

// updating progress of specific task
app.put("/", async (req, res) => {
  const id = req.body.key;
  const task = await Task.findOneAndUpdate({ _id: id }, { progress: true });
  res.status(200).send(task);
});

app.listen(port, () => {
  console.log("Listening at http://localhost:2020");
});
