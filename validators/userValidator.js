const { body, validationResult} = require("express-validator");

const userValidationRules = [
    body("firstName").trim().notEmpty().withMessage("Debe completar el campo nombres."),
    body("lastName").trim().notEmpty().withMessage("Debe completar el campo apellidos."),
    body("phone").isInt().withMessage("Debe contener valores numericos"),
    body("email").notEmpty().withMessage("Debes completar el campo emmail").bail()
    .isEmail().withMessage("Debes completar con un mail valido"),
    body("password").notEmpty().withMessage("Debes completar el campo contraseña").bail()
    .isLength({ min:6 }).withMessage("La contraseña debe tener al menos 6 caracteres")
];

module.exports = userValidationRules;