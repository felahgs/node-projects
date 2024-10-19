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
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
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

  static findById(id, callback) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      callback(product);
    });
  }
};
