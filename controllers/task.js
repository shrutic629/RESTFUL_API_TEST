const Task = require("../models/tasks");

exports.createTask = async (req, res) => {
  const data = req.body;
  const task = new Task(data);
  await task.save();
  res.status(200).json(task);
};

exports.getallTasks = async (req, res) => {
  const task = await Task.find().populate("assignedTo");
  res.status(200).json(task);
};

exports.getSingleTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findById(id);
  res.status(200).json(task);
};

exports.updateTask = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const task = await Task.findByIdAndUpdate(id, data);
  res.status(200).json(task);
};

exports.deleteTask = async (req, res) => {
  const id = req.params.id;
  const task = await Task.findByIdAndDelete(id);
  res.status(200).json(task);
};
