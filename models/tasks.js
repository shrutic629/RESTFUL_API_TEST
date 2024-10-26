const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    assignedTo: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    dueDate: {
      required: true,
      type: Date,
    },
    completed: {
      required: true,
      type: Boolean,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Task", taskSchema);
