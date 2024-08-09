const express = require("express");
const router = express.Router();
const upload = require("../services/fileUpload");
const adminMiddleware = require("../middlewares/adminMiddleware");
const productController = require("../controllers/productController");

router.get("/:category", productController.getByCategory);
router.get("/details/:id", adminMiddleware, productController.getById);
router.get("/edit/:id", adminMiddleware, productController.getEditProductForm);
router.put("/edit/:id", upload.single("image"), productController.updateProduct);

module.exports = router;