const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/details/:category", productController.getByCategory);

module.exports = router;