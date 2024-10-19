const express = require("express");
const path = require("path");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProductPage);

// /admin/edit-product => GET
router.get("/edit-product/:productId", adminController.getEditProductPage);

// /admin/products => GET
router.get("/products", adminController.getProductsListPage);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
