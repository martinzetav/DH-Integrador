const fs = require("node:fs");
const path = require("node:path");

const dataSource = {
    filePath: path.join(__dirname, '../data/products.json'),
    load(){
        const jsonProducts = fs.readFileSync(this.filePath, "utf-8");
        const products = JSON.parse(jsonProducts);
        return products;
    }
}

module.exports = dataSource;