const bcryptjs  = require("bcryptjs");
const User = require("../models/User");
const { validationResult } = require("express-validator");


const userController = {
    users: null,
    getRegisterForm(req, res){
        return res.render("register");
    },
    createUser(req, res){
        const errors = validationResult(req);

        if(errors.isEmpty()){
            // this.users = dataSource.load(usersFilePath);
            const {firstName, lastName, phone, email, password} = req.body;
            const userInDB = User.findByField("email", email);
            if(userInDB){
                return res.render("register", {
                    errors: {
                        email: {
                            msg: "Este email ya está registrado"
                        }
                    },
                    oldData: req.body});

            }
            const newUser = {
                // id: this.users.length ? this.users[this.users.length - 1].id + 1: 1,
                firstName,
                lastName,
                phone,
                email,
                password: bcryptjs.hashSync(password, 10)
            }
            const userCreated = User.create(newUser);
            // this.users.push(newUser);
            // dataSource.save(usersFilePath, this.users);
            return res.redirect("login");
        }else{
            return res.render("register", {errors: errors.mapped(), oldData: req.body});
        }
    },
    getLoginForm(req, res){
        res.render("login");
    },
    loginProcess(req, res){
        const { email, password, rememberMe } = req.body;
        const userToLogin = User.findByField("email", email);
        if(userToLogin){
            const isOkThePassword = bcryptjs.compareSync(password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                if(rememberMe){
                    res.cookie("userEmail", email, { maxAge: (1000*60) * 2 });
                }
                return res.redirect("/users/profile");
            }else{
                return res.render("login", {
                    errors:{
                        password: {
                            msg: "La contraseña que ingresaste es incorrecta"
                        }
                    },
                    oldData: req.body
                })
            }
        }else{
            return res.render("login", {
                errors:{
                    email: {
                        msg: "Este email no se encuentra registrado"
                    }
                },
                oldData: req.body
            })
        }
    },
    getUserProfile(req, res){
        return res.render("userProfile", {user: req.session.userLogged});
    },
    logout(req, res){
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/users/login");
    }
}

module.exports = userController;