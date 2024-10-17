const fs = require("fs");
const path = require("path");

const pathName = require("../util/path");

const p = path.join(pathName, "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return callback([]);
    }
    return callback(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (!err) {
          console.log("Product saved to file");
        } else {
          console.log("Error saving product to file", err);
        }
      });
    });
  }

  // Static methods can be called from the class and not from intance object
  static fetchAll(callback) {
    getProductsFromFile(callback);
  }
};
