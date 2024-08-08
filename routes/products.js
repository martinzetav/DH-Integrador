const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middlewares/adminMiddleware");
const productController = require("../controllers/productController");

router.get("/:category", productController.getByCategory);
router.get("/details/:id", adminMiddleware, productController.getById);
router.get("/edit/:id", adminMiddleware, productController.getEditProductForm);

module.exports = router;