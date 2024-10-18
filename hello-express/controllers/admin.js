const Product = require("../models/product");
exports.getAddProductPage = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProductsListPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/product-list", {
      pageTitle: "Products",
      path: "/admin/product-list",
      prods: products,
    });
  });
};
