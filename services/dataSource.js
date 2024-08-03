const fs = require("node:fs");

const dataSource = {
    load(filePath){
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(jsonData);
        return data;
    }
}

module.exports = dataSource;