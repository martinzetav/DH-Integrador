const express = require("express");
const router = express.Router();
const userValidationRules = require("../validators/userValidator");
const userController = require("../controllers/userController");


router.get("/register", userController.getRegisterForm);
router.post("/register", userValidationRules, userController.createUser);
router.get("/login", userController.getLoginForm);


module.exports = router;