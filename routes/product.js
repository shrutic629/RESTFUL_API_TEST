const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");
const verifyauth = require("../middlewares/verifyauth");

router.post("/", verifyauth, productController.createproduct);
router.get("/", verifyauth, productController.getallProducts);
router.get("/:id", verifyauth, productController.getSingleProduct);
router.patch("/:id", verifyauth, productController.updateProduct);
router.delete("/:id", verifyauth, productController.deleteProduct);

module.exports = router;
