const Product = require("../models/product");

exports.getIndexPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getProductsPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getCartPage = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Shopping Cart",
    path: "cart",
  });
};

exports.getOrdersPage = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Orders",
    path: "orders",
  });
};

exports.getCheckoutPage = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};
