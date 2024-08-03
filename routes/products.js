const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/:category", productController.getByCategory);
router.get("/details/:id", productController.getById);

module.exports = router;