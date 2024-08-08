const Product = require("../models/Product");

const productController = {
    products: null,
    getByCategory(req, res){
        this.products = Product.findAll();
        const {category} = req.params;
        this.products = this.products.filter(prod => prod.category == category);
        
        res.render("index", { products: this.products, category });
    },
    getById(req, res){
        this.products = Product.findAll();
        const {id} = req.params;
        const product = this.products.find(prod => prod.id == id);
        res.render("productDetails", {product});
    }
}

module.exports = productController;