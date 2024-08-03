const path = require("node:path");
const dataSource = require("../services/dataSource");
const usersFilePath = path.join(__dirname, '../data/users.json')

const userController = {
    usersJSON: null,
    getRegisterForm(req, res){
        res.render("register");
    },
    createUser(req, res){
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
        res.redirect("/");
    }
}

module.exports = userController;