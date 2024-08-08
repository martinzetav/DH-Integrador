const Product = require("../models/Product");

const mainController = {
    products: null,
    getProductsAll(req, res){
        this.products = Product.findAll();
        res.render("index", { products: this.products });
    }
}

module.exports = mainController;