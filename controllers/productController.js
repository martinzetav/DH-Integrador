const dataSource = require("../services/dataSource");

const productController = {
    products: null,
    getByCategory(req, res){
        this.products = dataSource.load();
        const {category} = req.params;
        this.products = this.products.filter(prod => prod.category == category);
        
        res.render("index", { products, category });
    },
    getById(req, res){
        this.products = dataSource.load();
        const {id} = req.params;
        const product = this.products.find(prod => prod.id == id);
        res.render("productDetails", {product});
    }
}

module.exports = productController;