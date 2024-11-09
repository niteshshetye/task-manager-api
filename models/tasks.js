const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required..."],
    trim: true,
    minlength: [3, "Title cannot be less than 3 character"],
    maxlength: [50, "Title cannot be more than 50 character"],
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const TaskModal = new mongoose.model("Task", TaskSchema);

module.exports = { TaskModal };
