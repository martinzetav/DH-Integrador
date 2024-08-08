const Product = require("../models/Product");

const productController = {
    products: null,
    getByCategory(req, res){
        this.products = Product.findAll();
        const {category} = req.params;
        this.products = this.products.filter(prod => prod.category == category);
        
        return res.render("index", { products: this.products, category });
    },
    getById(req, res){
        this.products = Product.findAll();
        const {id} = req.params;
        const product = this.products.find(prod => prod.id == id);
        return res.render("productDetails", {product});
    },
    getEditProductForm(req, res){
        return res.render("productEditForm.ejs");
    }
}

module.exports = productController;