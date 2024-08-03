const dataSource = require("../services/dataSource");

const productController = {
    products: null,
    getByCategory(req, res){
        this.products = dataSource.load();
        const {category} = req.params;
        const productsByCategory = this.products.filter(prod => prod.category == category);
        
        res.render("productDetails", { productsByCategory, category });
    }
}

module.exports = productController;