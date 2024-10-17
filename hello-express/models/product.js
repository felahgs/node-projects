const products = [];

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    products.push(this);
    console.log(`Product saved: ${this.title}`);
  }

  // Static methods can be called from the class and not from intance object
  static fetchAll() {
    return products;
  }
};
