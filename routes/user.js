const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const verifyauth = require("../middlewares/verifyauth");

router.post("/", verifyauth, userController.createuser);
router.get("/", verifyauth, userController.getallUsers);
router.get("/:id", verifyauth, userController.getSingleUser);
router.patch("/:id", verifyauth, userController.updateUser);
router.delete("/:id", verifyauth, userController.deleteUser);

router.post("/signup", userController.signupUser);
router.post("/login", userController.loginUser);

module.exports = router;
