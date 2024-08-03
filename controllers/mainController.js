const path = require("node:path");
const dataSource = require("../services/dataSource");
const productsFilePath = path.join(__dirname, '../data/products.json')

const mainController = {
    products: null,
    getProductsAll(req, res){
        this.products = dataSource.load(productsFilePath);
        res.render("index", { products });
    }
}

module.exports = mainController;