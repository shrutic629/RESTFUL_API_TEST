const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");
const verifyauth = require("../middlewares/verifyauth");

router.post("/", verifyauth, taskController.createTask);
router.get("/", verifyauth, taskController.getallTasks);
router.get("/:id", verifyauth, taskController.getSingleTask);
router.patch("/:id", verifyauth, taskController.updateTask);
router.delete("/:id", verifyauth, taskController.deleteTask);

module.exports = router;
