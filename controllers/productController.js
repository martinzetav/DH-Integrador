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
        const {id} = req.params;
        this.products = Product.findAll();
        const product = this.products.find(prod => prod.id == id);
        return res.render("productEditForm.ejs", {product});
    },
    updateProduct(req, res){
        const {id} = req.params;
        const {name, color, size, category, description, price} = req.body;
        const newImage = req.file ? req.file.filename : null;
        const product = {
            name,
            color,
            size,
            category,
            description,
            price,
            image: newImage
        }

        Product.editProduct(id, product);
        res.redirect(`/products/details/${id}`);
        
    }
}

module.exports = productController;