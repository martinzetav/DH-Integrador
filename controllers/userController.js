const path = require("node:path");
const dataSource = require("../services/dataSource");
const { validationResult } = require("express-validator");
const usersFilePath = path.join(__dirname, '../data/users.json')

const userController = {
    users: null,
    getRegisterForm(req, res){
        res.render("register");
    },
    createUser(req, res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
            this.users = dataSource.load(usersFilePath);
            const {firstName, lastName, phone, email, password} = req.body;
            const newUser = {
                id: this.users.length ? this.users[this.users.length - 1].id + 1: 1,
                firstName,
                lastName,
                phone,
                email,
                password
            }
            this.users.push(newUser);
            dataSource.save(usersFilePath, this.users);
            res.redirect("login");
        }else{
            res.render("register", {errors: errors.mapped(), oldData: req.body});
        }
    },
    getLoginForm(req, res){
        res.render("login");
    }
}

module.exports = userController;