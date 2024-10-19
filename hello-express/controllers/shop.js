const Product = require("../models/product");
const Cart = require("../models/cart");

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

exports.getProductPage = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-detail", {
      pageTitle: product.title,
      product: product,
      path: "",
    });
  });
};

exports.getCartPage = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Shopping Cart",
    path: "cart",
  });
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, (product) => {
    console.log("product", product);
    Cart.addProduct(prodId, product.price);
  });
  res.redirect("/cart");
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
