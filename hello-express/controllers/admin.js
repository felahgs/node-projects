const Product = require("../models/product");
exports.getAddProductPage = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.getEditProductPage = (req, res, next) => {
  const editMode = req.query.editing;
  if (!editMode) {
    res.redirect("/");
  }
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/edit-product",
    editing: editMode ? "true" : "false",
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, description, imageUrl, price } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

exports.getProductsListPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      pageTitle: "Products",
      path: "/admin/products",
      prods: products,
    });
  });
};
