const fs = require("node:fs");

const dataSource = {
    load(filePath){
        const jsonData = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(jsonData);
        return data;
    },
    save(filePath, data){
        const newJsonData = JSON.stringify(data);
        // const jsonData = fs.readFileSync(filePath, "utf-8");
        fs.writeFileSync(filePath, newJsonData);
    }
}

module.exports = dataSource;