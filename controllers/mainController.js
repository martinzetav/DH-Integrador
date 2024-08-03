const dataSource = require("../services/dataSource");

const mainController = {
    products: null,
    getProductsAll(req, res){
        this.products = dataSource.load();
        res.render("index", { products });
    }
}

module.exports = mainController;