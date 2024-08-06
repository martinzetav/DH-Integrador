const express = require("express");
const router = express.Router();
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const userValidationRules = require("../validators/userValidator");
const userController = require("../controllers/userController");


router.get("/register", guestMiddleware, userController.getRegisterForm);
router.post("/register", userValidationRules, userController.createUser);
router.get("/login", guestMiddleware, userController.getLoginForm);
router.post("/login", userController.loginProcess);
router.get("/profile", authMiddleware, userController.getUserProfile);
router.post("/logout", userController.logout);


module.exports = router;