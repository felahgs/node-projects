const express = require("express");
const path = require("path");

const rootDir = require("../util/path");
const { render } = require("pug");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });

  // Renders the add-product.html file.
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  // console.log("product page");
  // console.log("from:", req.originalUrl, "\n");

  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
