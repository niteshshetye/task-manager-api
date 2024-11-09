const { customApiError } = require("../errors/custom-error");
const { asyncWrapper } = require("../middleware/asyncWrapper");
const { TaskModal } = require("../models/tasks");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await TaskModal.find({});
  return res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;

  const task = await TaskModal.findOne({ _id: taskId });
  if (!task) {
    const error = customApiError("Task not found", 404);
    return next(error);
  }
  return res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await TaskModal.create(req.body);
  return res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await TaskModal.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    const error = customApiError("Task not found", 404);
    return next(error);
  }
  return res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await TaskModal.findOneAndDelete({ _id: taskId });
  if (!task) {
    const error = customApiError("Task not found", 404);
    return next(error);
  }
  return res.status(200).json({ message: "Task deleted" });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
